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

    console.log(req.body);
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
      location: req.body.location,
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


router.patch('/:id', (req, res, next) => {
  console.log(req.body);
  knex('users')
      .where('id', req.params.id)
      .first()
      .then((user) => {
          if (!user) {
            return next();
          }
          return knex('users')
              .update({
                  occupation: req.body.occupation,
                  ethnicity: req.body.ethnicity,
                  religion: req.body.religion,
                  school: req.body.school,
                  description: req.body.description,
              }, '*')
              .where('id', req.params.id);
      })
      .then((users) => {
          res.send(users[0]);
      })
      .catch((error) => {
        res.status(500)
        res.end(error.message);
      });
  });

  router.patch('/:id/points', (req, res, next) => {
    console.log(req.body);
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((user) => {
            if (!user) {
              return next();
            }
            return knex('users')
                .update({
                    total_exp: req.body.total_exp,
                    level: req.body.level
                }, '*')
                .where('id', req.params.id);
        })
        .then((users) => {
            res.send(users[0]);
        })
        .catch((error) => {
          res.status(500)
          res.end(error.message);
        });
    });

    router.patch('/:id/dynamic', (req, res, next) => {
      knex('users')
          .where('id', req.params.id)
          .first()
          .then((user) => {
              if (!user) {
                return next();
              }
              return knex('users')
                     .where('id', req.params.id)
                     .update(req.body, '*')
          })
          .then((users) => {
              res.send(users[0]);
          })
          .catch((error) => {
            res.status(500)
            res.end(error.message);
          });
      });
    
  


module.exports = router;
