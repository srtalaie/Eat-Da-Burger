const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: 'UOBH#:O*(YO9p3874guo',
    database: "burger_db"
  });

module.exports = connection;