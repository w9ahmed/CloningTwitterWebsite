var site = 'CloningTwitterWebsite'; // root folder name
var port = 5000;

console.log('Running Server for ' + site + '...');

var express = require('express');
var app = express();

app.use(express.static('../CloningTwitterWebsite'));

app.listen(port);

console.log('Success...')
console.log('Running server on port: ' + port);

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
