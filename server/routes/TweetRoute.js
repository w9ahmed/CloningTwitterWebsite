app.get('/api/tweets', function (req, res) {
    db.tweets.find(function (err, docs) {
        res.json(docs);
    });
});

app.post('/api/tweets', function (req, res) {
    db.tweets.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});
