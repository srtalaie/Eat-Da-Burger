const orm = require('../config/orm.js');

let burger = {
    getAll: function(callBack){
        orm.getAll('burgers', function(response){
            callBack(response);
        });
    },
    create: function(callBack){
        orm.create('burgers', burgerName, function(response){
            callBack(response);
        });
    },
    delete: function(callBack){
        orm.delete('burgers', burgerID, function(response){
            callBack(response);
        });
    }
}

module.exports = burger;