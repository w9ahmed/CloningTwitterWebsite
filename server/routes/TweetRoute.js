// get all tweets
app.get('/api/tweets', function(req, res) {

    // use mongoose to get all tweets in the database
    Tweet.find(function(err, tweets) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(tweets); // return all tweets in JSON format
    });
});

// create tweet and send back all tweets after creation
app.post('/api/tweet', function(req, res) {

    // create a tweet, information comes from AJAX request from Angular
    Tweet.create({
        text : req.body.text,
        done : false
    }, function(err, tweet) {
        if (err)
            res.send(err);

        // get and return all the tweets after you create another
        Tweet.find(function(err, tweet) {
            if (err)
                res.send(err)
            res.json(tweet);
        });
    });

});

// delete a tweet
app.delete('/api/tweet/:tweet_id', function(req, res) {
    Tweet.remove({
        _id : req.params.tweet_id
    }, function(err, tweet) {
        if (err)
            res.send(err);

        // get and return all the tweets after you create another
        Tweet.find(function(err, tweet) {
            if (err)
                res.send(err)
            res.json(tweet);
        });
    });
});