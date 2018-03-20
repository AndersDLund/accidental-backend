const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js');
const enviornmentConfig = config[environment];
const knex = require('knex');
const connection = knex(enviornmentConfig);

module.exports = connection;
