
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_matches', (table) => {
    table.integer('match_id').references('matches.id').notNullable();
    table.integer('user_id').references('users.id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_matches');
};
