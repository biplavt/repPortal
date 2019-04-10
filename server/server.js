var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var cors = require('cors');
var favicon = require('serve-favicon');


var originsWhitelist = [
    'http://localhost:4200' //this is my front-end url for development
    //, 'http://www.myproductionurl.com'
];
var corsOptions = {
    origin: function(origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}
//here is the magic
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(require('../routes/allRoutes'));

const port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log(`Server started at port ${PORT}..`);
});