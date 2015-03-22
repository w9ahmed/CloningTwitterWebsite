require('colors');

var site = 'CloningTwitterWebsite'; // root folder name
var port = 5000;

console.log('Running Server for '.blue + site.yellow + '...'.yellow);

var express = require('express');
var app = express();

app.use(express.static('../CloningTwitterWebsite'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port);

console.log('Running server on port: '.blue + port.toString().yellow);
console.log('Success...'.green );
console.log('Go to (http://localhost:5000) on your browser!');

/* ******** ROUTING ******** */
