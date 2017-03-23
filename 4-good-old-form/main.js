/*
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.
*/
var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();

// call middleware
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
});

app.listen(process.argv[2]);