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
  .select(
    'matches.id as match_id', 
    'users.username', 'users.first', 'users.last', 'users.level', 'users.occupation', 'users.gender', 'users.birthdate',
    'matches.match_a', 'matches.match_b'
  )
  .then((matches_a) => {
    matches_a.forEach((match) => {
      if (match.match_a && match.match_b) {
        matchesArr.push(match);
      }
    })
  })
  .then(() => {
    return knex('matches')
    .where('user_b', user)
    .leftJoin('users', 'users.id', 'matches.user_a')
    .select(
      'matches.id as match_id', 
      'users.username', 'users.first', 'users.last', 'users.level', 'users.occupation', 'users.gender', 'users.birthdate',
      'matches.match_a', 'matches.match_b'
    )
  })
  .then((matches_b) => {
    matches_b.forEach((match) => {
      if (match.match_a && match.match_b) {
        matchesArr.push(match);
      }
    });
    res.send(matchesArr)
  });
});

module.exports = router;