/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('places', (table) => {
    table.string('description', 10000).alter();
    table.string('src', 5000).alter();
    table.string('alt', 5000).alter();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('places', (table) => {
    table.dropColumn('description');
    table.dropColumn('src');
    table.dropColumn('alt');
  });
  await knex.schema.alterTable('places', (table) => {
    table.string('description');
    table.string('src');
    table.string('alt');
  })
  
};
