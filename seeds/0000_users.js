
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'ed@gmail.com', password: 'pass', first: 'Ed', last: 'Pantzar', birthdate: '1988-07-20', gender: 'm', seeking_female: true },
        { username: 'jake@gmail.com', password: 'pass', first: 'Jake', last: 'Lewis', birthdate: '1992-09-29', gender: 'm', seeking_female: true },
        { username: 'amanda@gmail.com', password: 'pass', first: 'Amanda', last: 'Rutherfoord', birthdate: '1987-04-19', gender: 'm', seeking_male: true },
        { username: 'louis@gmail.com', password: 'pass', first: 'Louis', last: 'Daily', birthdate: '1990-04-24', gender: 'm', seeking_female: true }
      ]);
    });
};
