const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/:match_id', (req, res) => {
  const match = req.params.match_id;
  knex('messages')
  .where('match_id', match)
  .orderBy('created_at', 'asc')
  .then((messages) => {
    console.log(messages);
    res.send(messages);
  });
});

router.post('/', (req, res) => {
  const post = req.body[0];
  knex('messages')
  .insert({
    user_id: post.user_id,
    match_id: post.match_id,
    message: post.message,
    created_at: post.created_at
  })
  .select('*')
  .then(() => {
    res.status(200);
    res.send();
  });
});

module.exports = router;