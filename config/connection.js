const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'UOBH#:O*(YO9p3874guo',
    database: "burger_db"
  });

// Make connection.
connection.connect(function (err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
  // Start our server so that it can begin listening to client requests.
  console.log("connected as id " + connection.threadId);

});
  module.exports = connection;