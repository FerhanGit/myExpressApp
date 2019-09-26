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

connection.query('USE prestashop');


app.get('/mysql', function(req, res){
    connection.query('SELECT * FROM ps_customer', function(err, rows){
        if(err) throw err;
        res.render('users', {users : rows});
    });
});


app.get('/mysql/:id', function(req, res){
    connection.query('SELECT * FROM ps_customer WHERE id_customer = ? ', [req.params.id], function(err, rows){
        if(err) throw err;
        res.render('users', {users : rows});
    });
});


console.log('Express server listening on port ' + app.get('view engine'));


   

//module.exports = router;