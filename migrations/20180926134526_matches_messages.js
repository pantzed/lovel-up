
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches_messages', (table) => {
    table.foreign('match_id').references('matches.id').notNullable();
    table.foreign('message_id').references('messages.id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches_messages');
};
