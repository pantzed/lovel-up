const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/', (req, res) => {
  knex('users').where('username', 'ed@gmail.com')
  .then((users) => {
    res.send(users);
  })
})

/* Post a new user. */
router.post('/', function(req, res) {
  console.log(req.body.photo);
  knex('users')
  .where('username', req.body.username)
  .then((user) => {
    if (user.length > 0) {
      return Promise.reject(new Error('Username is already taken!'));
    } 
    else {
      return bcrypt.hash(req.body.password, saltRounds);
    }
  })
  .then((hashedPassword) => {
    let seekingMale = false;
    let seekingFemale = false;
  
    if (req.body.preference === 'm' ?
      seekingMale = true :
      seekingFemale = true
    );

    return knex('users')
    .insert({
      first: req.body.first,
      last: req.body.last,
      password: hashedPassword,
      gender: req.body.gender,
      seeking_female: seekingFemale,
      seeking_male: seekingMale,
      username: req.body.username,
      birthdate: req.body.birthdate,
      photo_1: req.body.photo
    }, '*')
    .then((user) => {
      res.send(user);
    })
  })
  .catch((error) => {
    res.status(500)
    res.end(error.message);
  })
});

module.exports = router;
