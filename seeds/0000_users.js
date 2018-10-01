
const bcrypt = require('bcrypt');
let passList = ['pass', 'pass', 'pass', 'pass'];
let passHash = [];
for (let i = 0; i<passList.length; i++) {
  bcrypt.hash(passList[i], 10)
  .then(hash => {
    passHash.push(hash);
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries


  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'ed@gmail.com', password: passHash[0], first: 'Ed', last: 'Pantzar', birthdate: '1988-07-20', gender: 'm', seeking_female: true, location: '78741'},
        { username: 'jake@gmail.com', password: passHash[0], first: 'Jake', last: 'Lewis', birthdate: '1992-09-29', gender: 'm', seeking_female: true, location: '78741' },
        { username: 'amanda@gmail.com', password: passHash[0], first: 'Amanda', last: 'Rutherfoord', birthdate: '1987-04-19', gender: 'm', seeking_male: true, location: '78741' },
        { username: 'louis@gmail.com', password: passHash[0], first: 'Louis', last: 'Daily', birthdate: '1990-04-24', gender: 'm', seeking_female: true, location: '78741' }
      ]);
    });
};
