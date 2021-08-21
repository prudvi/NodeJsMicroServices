
'use strict';
var properties = require('../package.json');
var distance = require('../service/distance');
const http = require('http');
var controllers = {
    about: function(req, res) {  
        http.get('http://localhost:3001/heroes', (resp) => {
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {data += chunk;});
            // The whole response has been received. Print out the result.
            resp.on('end', () => { 
                var aboutInfo = {
                    name: properties.name,
                    version: properties.version,
                    data : data
                }
                    res.json(aboutInfo);
                });
        }).
        on("error", (err) => { 
            console.log("Error: " + err.message);
        });
    },
    getDistance: function(req, res) {
            distance.find(req, res, function(err, dist) {
                if (err)   res.send(err);
                 res.json(dist);   
            });  
     },
};


module.exports = controllers;
