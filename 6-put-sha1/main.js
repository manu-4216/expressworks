/*
Create an Express.js server that processes PUT '/message/:id' requests.

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:
*/

    var express = require('express');
    var app = express();
    var crypto = require('crypto');
    
    function getSha1 (id) {
        return crypto.createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex')
    }
    
    app.put('/message/:ID', function(req, res) {
      res.end(getSha1(req.params.ID));
    })
    
    app.listen(process.argv[2]);
    