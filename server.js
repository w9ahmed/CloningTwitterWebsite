var connect = require('connect');
var serveStatic = require('serve-static');

var site = 'CloningTwitterWebsite';

console.log('Running Server for ' + site + '...');

var port = 5000;

connect().use(
    serveStatic("../" + site)
).listen(port);

console.log('Success...')
console.log('Port: ' + port);