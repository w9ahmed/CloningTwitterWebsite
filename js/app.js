var Twitter = {};

Twitter.showNewTweets = function(howMany) {
	$("div.stream-bar").remove();
	var notification = '<div class="stream-bar">View ';

	if(typeof(howMany) === 'undefined')
		howMany = 1;

	if(howMany === 1)
		 notification+= howMany + ' new Tweet</div>';
	else
		 notification+= howMany + ' new Tweets</div>';
	$("div.the-panel-title").after(notification);
};

Twitter.hideNewTweets = function() {
	$("div.stream-bar").remove();
}