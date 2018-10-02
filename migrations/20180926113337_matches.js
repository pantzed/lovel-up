
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', (table) => {
    table.increments('id').primary();
    table.integer('user_a').references('id').inTable('users');
    table.integer('user_b').references('id').inTable('users');
    table.boolean('match_a').defaultTo(false);
    table.boolean('match_b').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches');
};