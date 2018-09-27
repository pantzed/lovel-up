
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches_messages', (table) => {
    table.integer('match_id').references('matches.id').notNullable();
    table.integer('message_id').references('messages.id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches_messages');
};
