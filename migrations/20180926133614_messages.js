
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.text('message').notNullable();
    table.timestamp('created_at').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
