
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {id: 0, user_a: 0, user_b: 1, match_a: true, match_b: false},
        {id: 1, user_a: 1, user_b: 2, match_a: true, match_b: false},
        {id: 2, user_a: 2, user_b: 0, match_a: true, match_b: true},
      ]);
    });
};
