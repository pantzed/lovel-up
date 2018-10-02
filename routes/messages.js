const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/:match_id', (req, res) => {
  const match = req.params.match_id;

  knex('messages')
  .where('match_id', match)
  .orderBy('created_at', 'desc')
  .then((messages) => {
    console.log(messages);
    res.send(messages);
  })
})

module.exports = router;