const knex = require('knex');
const config = require('./knexfile');
const environment = 'production';
const knexConfig = config[environment];

module.exports = knex(knexConfig);