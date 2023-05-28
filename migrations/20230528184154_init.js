/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('places', function(table) {
    table.increments('id');
    table.string('name');
    table.string('address');
    table.string('location');
    table.string('category');
    table.string('zip_code');
    table.string('rating');
    table.string('website');
    table.string('description');
    table.string('src');
    table.string('alt');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('places');
};
