// build your `Task` model here
const db = require("../../data/dbConfig");

const findAll = (table) => db(table);

module.exports = { findAll };
