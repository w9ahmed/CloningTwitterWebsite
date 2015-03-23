app.listen(port);
exports = module.exports = app;

console.log('Running server on port: '.blue + port.toString().yellow);
console.log('Success...'.green );
console.log('Go to (http://localhost:5000) on your browser!');