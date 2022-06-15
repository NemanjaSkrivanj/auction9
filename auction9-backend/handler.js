"use strict";

const mysql = require('./db-config').db;

module.exports.hello = async (event) => {
  let user = await mysql.query('SELECT * FROM users');
  return {user};
}
