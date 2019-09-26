"use strict";
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();
var fs = require('fs');

var app = require('../app.js');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

connection.query('USE gozbite');


app.get('/recipes/json', function(req, res){
    connection.query('SELECT * FROM recipes', function(err, rows){
        if(err) throw err;
        res.json(rows);
    });
});


app.get('/recipes/json/:id', function(req, res){
    connection.query('SELECT * FROM recipes WHERE id = ? ', [req.params.id], function(err, rows){
        if(err) throw err;
        res.json(rows);
    });
});



app.get('/recipes', function(req, res){
    connection.query('SELECT * FROM recipes', function(err, rows){
        if(err) throw err;
        res.render('recipes', {recipes : rows});
    });
});


app.get('/recipes/:id', function(req, res){
    connection.query('SELECT * FROM recipes WHERE id = ? ', [req.params.id], function(err, rows){
        if(err) throw err;
        res.render('recipe', {recipes : rows});
    });
});
console.log('Express server listening on port ' + app.get('view engine'));


   

//module.exports = router;