const mysql = require('mysql');
let connection = {};

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: 'UOBH#:O*(YO9p3874guo',
    database: "burger_db"
  });
}

module.exports = connection;