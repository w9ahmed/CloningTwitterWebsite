var Twitter = {};
/* ***** Commands ***** */
Twitter.hideNewTweets = function() {
	$("div.stream-bar").slideUp(function () {
		$("div.stream-bar").remove();
	});
};

Twitter.flash = function(text) {
	if(text === 'undefined')
		text = 'Your Tweet was posted!';

	$('.flash-notification').text(text);
	var left = ($(window).width() / 2) - 250;

	$('.flash-notification').css('left', left);
	$('.flash-notification').fadeIn();
	$('.navbar').addClass('shadow-down');

	setTimeout(function () {
		$('.flash-notification').fadeOut();
		$('.navbar').removeClass('shadow-down');
	}, 5000);
};

