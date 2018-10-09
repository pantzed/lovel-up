
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
        { id: 0, username: 'ed@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Ed', last: 'Pantzar', birthdate: '1988-07-20', gender: 'm', seeking_female: true, location: '78741'},
        { id: 1, username: 'jake@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Jake', last: 'Lewis', birthdate: '1992-09-29', gender: 'm', seeking_female: true, location: '78741' },
        { id: 2, username: 'amanda@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Amanda', last: 'Rutherfoord', birthdate: '1987-04-19', gender: 'f', seeking_male: true, location: '78741' },
        { id: 3, username: 'louis@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Louis', last: 'Daily', birthdate: '1990-04-24', gender: 'm', seeking_female: true, location: '78741' },
        { id: 4, username: 'dirk@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Dirk', last: 'Ruschuapt', birthdate: '1982-04-24', gender: 'm', seeking_female: true, location: '78741' },
        { id: 5, username: 'david@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'David', last: 'Miller', birthdate: '1980-04-24', gender: 'm', seeking_female: true, location: '78741' },
        { id: 6, username: 'grace@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Grace', last: 'Hartzell', birthdate: '1987-04-19', gender: 'f', seeking_male: true, location: '78741' },
        { id: 7, username: 'blythe@gmail.com', password: '$2b$10$rEHKfH7vav6Jd.1akXNH8.kTa9FElOGgHonf4WpOf357pGw4DTqXC', first: 'Blythe', last: 'Totsch', birthdate: '1987-04-19', gender: 'f', seeking_male: true, location: '78741' },
      ]);
    });
};
