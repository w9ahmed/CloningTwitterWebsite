var Twitter = {};
var $rootScope = angular.element("body").scope();

$(document).ready(function() {
	$("button.followbtn").click(function () {
		$(this).toggleClass("btn-default");
		$(this).toggleClass("btn-primary");
		var span1 = $(this).children("span")[1];
		$(span1).toggle();
		var span2 = $(this).children("span")[2];
		$(span2).toggle();
	});

	$("span.close").click(function () {
		console.log("HJ");
	});

	$("#retweet a").click(function() {
		$(this).toggleClass("retweeted")
	});

	$("#favorite a").click(function() {
		$(this).toggleClass("favorited")
	});
});

/* ***** Commands ***** */

Twitter.showNewTweets = function(howMany) {
	var notification = '<div class="stream-bar">View ';

	if(typeof(howMany) === 'undefined')
		howMany = 1;

	if(howMany === 1)
		 notification+= howMany + ' new Tweet</div>';
	else
		 notification+= howMany + ' new Tweets</div>';

	if($("div.stream-bar").length == 0) {
		$("div.the-panel-title").after(notification);
		$("div.stream-bar").slideDown();
	} else {
		$("div.stream-bar").remove();
		$("div.the-panel-title").after(notification);
		$("div.stream-bar").show();
	}
};

Twitter.hideNewTweets = function() {
	$("div.stream-bar").slideUp(function () {
		$("div.stream-bar").remove();
	});
};
