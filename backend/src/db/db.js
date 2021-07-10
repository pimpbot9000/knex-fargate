require('dotenv').config()
const knex = require('knex')
const knexfile = require('./knexfile')[process.env.NODE_ENV]

const db = knex(knexfile)

module.exports = db
