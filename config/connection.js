const mysql = require('mysql');
const pass = require('./password');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass.password,
    database: "cat_db"
  });

  module.exports = connection;