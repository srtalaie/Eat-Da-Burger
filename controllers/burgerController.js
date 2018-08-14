const express = require('express');

const app = express();

const burger = require('../models/burger.js');

const routes = {
    get: function(){
        app.get('/', function(req, res){
            burger.getAll(function(data){
                let handlebarsObj = { burger: data };
                res.render('index', handlebarsObj);
            });
        });
    }
}

module.exports = routes;