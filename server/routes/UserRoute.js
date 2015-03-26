app.get('/api/users/:id', function (req, res) {
	var id = req.params.id;
	db.users.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/api/users/:id', function (req, res) {
	var id = req.params.id;
	db.users.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			user: req.body.user,
			username: req.body.username,
			tweets: req.body.tweets,
			following: req.body.following,
			followers: req.body.followers
		}},
		new: true}, function(err, doc) {
			res.json(doc);
		}
	);
});

app.put('/api/users/:id/tweets', function (req, res) {
	var id = req.params.id;
	db.users.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			tweets: req.body.tweets
		}},
		new: true}, function(err, doc) {
			res.json(doc);
		}
	);
});

app.put('/api/users/:id/followers', function (req, res) {
	var id = req.params.id;
	db.users.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			followers: req.body.followers
		}},
		new: true}, function(err, doc) {
			res.json(doc);
		}
	);
});

app.put('/api/users/:id/following', function (req, res) {
	var id = req.params.id;
	db.users.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			following: req.body.following
		}},
		new: true}, function(err, doc) {
			res.json(doc);
		}
	);
});