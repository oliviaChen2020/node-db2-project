exports.up = function (knex) {
  return knex.schema.createTable('fruits', (table) => {
    // id: primary key, unique, not null (integers that auto-increment)
    table.increments();
    table.text('VIN', 128).unique().notNullable();
    table.text('make', 128).notNullable();
    table.text('mode', 128).unique().notNullable();
    table.text('mileage').unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
