require('colors');

var site = 'CloningTwitterWebsite'; // root folder name
var port = 5000;

console.log('Running Server for '.blue + site.yellow + '...'.yellow);

var express  = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');

app.use(express.static(__dirname));

// log every request to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.get('*', function(req, res) {
	// load the single view file (angular will handle the page changes on the front-end)
    res.sendFile(__dirname + '/index.html');
});