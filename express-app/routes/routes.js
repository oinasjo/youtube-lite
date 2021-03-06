"use strict";

// Imports
const Util = require("../Util/ValidationHelpers.js");

// Exports
module.exports = {
    index: function (app) {
        if(Util.NotNullOrEmpty(app)) {
            return ( 
                app.get('/', function(req, res) { 
                    res.send('Index route')} 
                )
            );
        }
    },
    test: function (app) {
        if(Util.NotNullOrEmpty(app)) {
            return ( 
                app.get('/Test', function(req, res) { 
                    res.send('Express server responded with OK')}
                )
            );
        };
    },
};
  