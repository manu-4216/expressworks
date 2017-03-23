/*
Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3]. 
*/

var express = require('express');
 
var app = express();
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);