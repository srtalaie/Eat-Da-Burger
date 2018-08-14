const express = require('express');

const app = express();

const burger = require('../models/burger.js');

const routes = {
    get: function(app){
        app.get('/', function(req, res){
            burger.getAll(function(data){
                res.render('index', { burger: data });
            });
        });
    },
    post: function(app){
        app.post('/api/burgers', function(req, res){
            burger.create(req.body.burger_name, function(result){
                res.json(result);
            });
        });
    },
    delete: function(app){
        app.delete('/api/burgers/:id', function(req, res){
            burger.delete(req.params.id, function(results){
                if (results.changedRows === 0){
                    return res.status(404).end();
                } else {
                    res.status(200).end()
                }
            });
        });
    },
    put: function(app){
        app.put('/api/burgers/:id', function(req, res){
            burger.update(req.params.id, function(results){
                if (results.changedRows === 0){
                    return res.status(404).end();
                } else {
                    res.status(200).end()
                }
            });
        });
    }
}

module.exports = routes;