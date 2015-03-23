app.get('/api/tweets', function (req, res) {
    console.log("I received a GET request");
    db.twitter.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});