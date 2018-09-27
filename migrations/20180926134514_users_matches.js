
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_matches', (table) => {
    table.foreign('match_id').references('matches.id').notNullable();
    table.foreign('user_id').references('user.id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_matches');
};
