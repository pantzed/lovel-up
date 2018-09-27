
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable;
    table.string('password', 32).notNullable;
    table.string('first').notNullable;
    table.string('last').notNullable;
    table.date('birthdate').notNullable;
    table.string('gender', 1).notNullable;
    table.boolean('seeking_male').defaultTo(false);
    table.boolean('seeking_female').defaultTo(false);
    table.binary('photo_1').nullable;
    table.binary('photo_2').nullable;
    table.binary('photo_3').nullable;
    table.binary('photo_4').nullable;
    table.binary('photo_5').nullable;
    table.string('description', 400).nullable;
    table.integer('total_exp').defaultTo(0);
    table.integer('level_exp').defaultTo(0);
    table.integer('level').defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
