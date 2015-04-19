app.get('/api/user/:id/messages', function (req, res) {
	var id = req.params.id;
	db.messages.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});
