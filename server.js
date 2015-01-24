var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("../CloningTwitterWebsite")
).listen(5000);