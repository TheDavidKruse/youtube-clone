const { USERS_TABLE } = require('../../SERVER_CONSTANTS').tableNames;

exports.up = (knex, Promise) => {
  return knex.schema.createTable(USERS_TABLE, table => {
    table.increments().primary();
    table.string('username');
    table.string('email').unique();
    table.string('password');
    table.bool('is_admin').defaultTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable(USERS_TABLE);
};