const places = require('../data/places-data');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('places').del()
  await knex('places').insert(places, 'id');
};
