require('colors');

var site = 'CloningTwitterWebsite'; // root folder name
var port = 5000;

console.log('Running Server for '.blue + site.yellow + '...'.yellow);

// modules =================================================
var express        = require('express');
var app            = express();
var morgan = require('morgan'); // log requests to the console
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
// configuration ===========================================

app.use(morgan('dev'));

// config files
var db = require('./server/config/db');

// set our port
var port = process.env.PORT || 5000; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname));

app.get('/home', function(req, res) {
	// load the single view file (angular will handle the page changes on the front-end)
    res.sendFile(__dirname + '/index.html');
});

app.get('/notifications', function(req, res) {
	// load the single view file (angular will handle the page changes on the front-end)
    res.sendFile(__dirname + '/index.html');
});

app.get('/discover', function(req, res) {
	// load the single view file (angular will handle the page changes on the front-end)
    res.sendFile(__dirname + '/index.html');
});