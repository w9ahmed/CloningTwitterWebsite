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

var home = express();
var notifications = express();
var discover = express();

home.get('/', function (req, res) {
  console.log(home.mountpath);
  res.send('Home page');
})

notifications.get('/', function (req, res) {
  console.log(notifications.mountpath);
  res.send('Notifications page');
})

discover.get('/', function (req, res) {
  console.log(discover.mountpath); // /admin
  res.send('Discover page');
})

app.use('/home', home);
app.use('/notifications', notifications);
app.use('/discover', discover);
