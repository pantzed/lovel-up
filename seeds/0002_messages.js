
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 0, user_id: 0, match_id: 0, message: 'Hi', created_at: '1988-07-20'},
        {id: 1, user_id: 1, match_id: 0, message: 'Hello', created_at: '1988-07-20'},
        {id: 2, user_id: 1, match_id: 1, message: 'Hi', created_at: '1988-07-20'},
        {id: 3, user_id: 2, match_id: 1, message: 'Hello', created_at: '1988-07-20'},
        {id: 4, user_id: 2, match_id: 2, message: 'Hi', created_at: '1988-07-20'},
        {id: 5, user_id: 0, match_id: 2, message: 'Hello', created_at: '1988-07-20'},
      ]);
    });
};
