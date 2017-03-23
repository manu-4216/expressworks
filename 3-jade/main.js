/*
Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.
*/

var express = require('express')
var path = require('path')
var app = express()

// tell Express.js app what template engine to use
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'))

app.get('/home', function(req, res) {
    // Instead of res.end(), the res.render() function accepts a template name and presenter data:
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
