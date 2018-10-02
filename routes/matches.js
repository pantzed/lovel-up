const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
  knex('matches')
  .then((matches) => {
    res.send(matches);
  })
});

router.get('/:id', (req, res) => {
  const user = req.params.id;
  let matchesArr = [];

  knex('matches')
  .where('user_a', user)
  .leftJoin('users', 'users.id', 'matches.user_b')
  .then((matches_a) => {
    matchesArr = matchesArr.concat(matches_a);
    return knex('matches')
    .where('user_b', user)
    .leftJoin('users', 'users.id', 'matches.user_a')
  })
  .then((matches_b) => {
    matchesArr = matchesArr.concat(matches_b);
    res.send(matchesArr)
  });
});

module.exports = router;