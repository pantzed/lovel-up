'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
    console.log('working');
    let currentUser = null;
    // delete req.body.confirm_password;

    knex('users')
        .where('username', req.body.username)
        .then((userArr) => {
            if (userArr.length !== 1) {
                let usernameDoesntExist = new Error('Username does not exist!');
                return Promise.reject(usernameDoesntExist);
            } else {
                currentUser = userArr[0];
                let hashedPassword = currentUser.password;
                

                
                return bcrypt.compare(req.body.password, hashedPassword);
            }
        })
        .then((result) => {
            if (result) {
                res.send(currentUser);
            } else {
                let passwordIsIncorrect = new Error('Password is incorrect! Please Try Again.');
                return Promise.reject(passwordIsIncorrect);
            }
        })
        .catch(function (error) {
            res.status(500).send({
                error: error.message
            })
        })
});

module.exports = router;