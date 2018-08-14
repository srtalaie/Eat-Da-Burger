const connection = require('./connection.js');

let orm = {
    getAll: function(tableName, callBack){
        connection.query('SELECT * FROM ??', [tableName], function(err, results){
            if (err) throw err;

            callBack(results);
        });
    },
    create: function(tableName, burgerName, callBack){
        connection.query('INSERT INTO ?? (burger_name) VALUES (?)', [tableName, burgerName], function(err, results){
            if (err) throw err;

            callBack(results);
        });
    },
    delete: function(tableName, burgerID, callBack){
        connection.query('DELETE FROM ?? WHERE id = ?', [tableName, burgerID], function(err, results){
            if (err) throw err;

            callBack(results);
        })
    },
    update: function(tableName, columnName, burgerID, callBack){
        connection.query('UPDATE ?? SET ?? = true WHERE id = ?', [tableName, columnName, burgerID], function(err, results){
            if (err) throw err;

            callBack(results);
        });
    }
}

module.exports = orm;