
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', (table) => {
    table.increments('id').primary();
<<<<<<< Updated upstream
    table.boolean('date_a').defaultTo(false);
    table.boolean('date_b').defaultTo(false);
    table.integer('user_a_exp_given').defaultTo(0);
    table.integer('user_b_exp_given').defaultTo(0);
    table.integer('user_a_exp_received').defaultTo(0);
    table.integer('user_b_exp_received').defaultTo(0);
=======
    table.integer('user_a').references('id').inTable('users');
    table.integer('user_b').references('id').inTable('users');
    table.boolean('match_a').defaultTo(false);
    table.boolean('match_b').defaultTo(false);
>>>>>>> Stashed changes
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches');
};