app.get('/api/tweets', function (req, res) {
    db.tweets.find(function (err, docs) {
        res.json(docs);
    });
});

app.get('/api/tweets/:id', function (req, res) {
	var id = req.params.id;
	db.tweets.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.post('/api/tweets', function (req, res) {
	req.time = new Date();
    db.tweets.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.put('/api/tweets/:id', function (req, res) {
	var id = req.params.id;
	db.tweets.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			user: req.body.user,
			username: req.body.username,
			tweet: req.body.tweet,
			time: req.body.time,
			retweets: req.body.retweets,
			retweeted: req.body.retweeted,
			favorites: req.body.favorites,
			favorited: req.body.favorited,
			self: true
		}},
		new: true}, function(err, doc) {
			res.json(doc);
		}
	);
});

app.delete('/api/tweets/:id', function (req, res) {
	var id = req.params.id;
	db.tweets.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});