const environment = process.env.NODE_ENV || 'production'
const config = require('./knexfile.js');
const enviornmentConfig = config[environment];
const knex = require('knex');
const connection = knex(enviornmentConfig);

module.exports = connection;
