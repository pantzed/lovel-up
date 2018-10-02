
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id');
    table.integer('user_id').references('id').inTable('users');
    table.integer('match_id').references('id').inTable('matches');
    table.text('message').notNullable();
    table.bigint('created_at').unsigned().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
