
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username').notNullable;
    table.string('password', 64).notNullable;
    table.string('first').notNullable;
    table.string('last').notNullable;
    table.date('birthdate').notNullable;
    table.string('gender', 1).notNullable;
    table.string('location').notNullable;
    table.string('occupation');
    table.string('ethnicity');
    table.string('religion');
    table.string('school');
    table.boolean('seeking_male').defaultTo(false);
    table.boolean('seeking_female').defaultTo(false);
    table.text('photo_1').defaultTo(null);
    table.text('photo_2').defaultTo(null);
    table.text('photo_3').defaultTo(null);
    table.text('photo_4').defaultTo(null);
    table.text('photo_5').defaultTo(null);
    table.text('photo_6').defaultTo(null);
    table.string('description', 800).nullable;
    table.integer('total_exp').defaultTo(0);
    table.integer('level_exp').defaultTo(0);
    table.integer('level').defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
