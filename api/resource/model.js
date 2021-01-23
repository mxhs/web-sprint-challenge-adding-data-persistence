// build your `Resource` model here
const db = require("../../data/dbConfig");

const findAll = (table) => db(table);

module.exports = { findAll };
