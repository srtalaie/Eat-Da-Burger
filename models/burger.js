const orm = require('../config/orm.js');

let burger = {
    getAll: function(callBack){
        orm.getAll('burgers', function(response){
            callBack(response);
        });
    },
    create: function(burgerName, callBack){
        orm.create('burgers', burgerName, function(response){
            callBack(response);
        });
    },
    delete: function(burgerID, callBack){
        orm.delete('burgers', burgerID, function(response){
            callBack(response);
        });
    },
    update: function(burgerID, callBack){
        orm.update('burgers', 'devoured', burgerID, function(response){
            callBack(response);
        });
    }
}

module.exports = burger;