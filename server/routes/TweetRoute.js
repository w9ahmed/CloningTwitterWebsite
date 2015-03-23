var Tweet = require('server/models/TweetModel');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/tweets', function(req, res) {
        // use mongoose to get all nerds in the database
        Tweet.find(function(err, tweets) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(tweets); // return all nerds in JSON format
        });
    });