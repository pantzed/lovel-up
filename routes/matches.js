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
    'users.username', 'users.first', 'users.last', 'users.level', 'users.occupation', 'users.gender', 'users.birthdate', 'users.photo_1',
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
      'users.username', 'users.first', 'users.last', 'users.level', 'users.occupation', 'users.gender', 'users.birthdate', 'users.photo_1',
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
router.post('/:id', (req, res, next) => {
  console.log('req.body: ', req.body);
  const match_id = req.body.id;
  const user_id = parseInt(req.params.id);
  knex('matches')
  .then((match) => {
    console.log('match found: ', match);
    console.log('\n');
    console.log('should be inserting: ');
    return knex('matches')
    .insert({
      user_a: user_id, 
      user_b: match_id,
      match_a: true,
      match_b: false,
    }, '*')
  })
  .then((matches) => {
    console.log('match: ', matches);
    console.log('\n');
      res.send(matches);
  })
  .catch((error) => {
    res.status(500)
    res.end(error.message);
  });
});




router.patch('/:id', (req, res, next) => {
  const match_id = req.body.id;
  const user_id = parseInt(req.params.id);
  knex('matches')
  // .where({
  //   user_a: user_id,
  //   user_b: match_id
  // })
  // .orWhere({
  //   user_a: match_id,
  //   user_b: user_id,
  // })
  .then((match) => {
    console.log('match found: ', match);
    console.log('\n');
    for (let i=0; i<match.length; i++){
      if(match[i].user_b===match_id && match[i].user_a===user_id){
        console.log('changing user_a', match[i]);
        return knex('matches')
        .update({
            match_a: true,
        }, '*')
        .where({
          user_a: user_id,
          user_b: match_id,
        });
      }
      if(match[i].user_a===match_id && match[i].user_b===user_id){
        console.log('changing user_b', match[i]);
        return knex('matches')
        .update({
            match_b: true,
        }, '*')
        .where({
          user_a: match_id,
          user_b: user_id,
        });
      }
    }

    console.log('should be inserting: ');
    return knex('matches')
    .orderBy('id', 'asc')
    .insert({
      id: match.length,
      user_a: user_id, 
      user_b: match_id,
      match_a: true,
      match_b: false,
    }, '*')
  })
  .then((matches) => {
    console.log('type: ', typeof matches);
    console.log('match: ', matches);
    res.send(matches[0]);
    console.log('\n');
  })
  .catch((error) => {
    res.status(500)
    res.end(error.message);
  });
});

module.exports = router;