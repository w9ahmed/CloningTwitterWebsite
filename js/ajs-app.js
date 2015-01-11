(function () {
	var app = angular.module("twitter", []);

	app.controller("DashboardController", function() {
		this.message = "This is the end!";
	});

	app.controller('WWTrendsCtrl', function() {
		this.trends = ['#AskSuperwomanLIVE', '#OlimpiadasDoRangelPt1', '#TodoBienHastaQue', '#5HNoPontoPop', '#yourefired', "John O'Shea", 'Richard Flanagan', 'Lorik Cana', 'Chiles', 'Lord Sugar'];
	});

	app.controller('StreamCtrl', function() {
		this.tweets = [
		{
			user: 'Ahmed Sami Mohamed',
			username: '@w9ahmed',
			tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			time: '45s',
			retweets: 5,
			favorites: 3
		},
		{
			user: 'Ahmed Ezzat',
			username: '@is7yX',
			tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			time: '1m',
			retweets: 3,
			favorites: 3
		},
		{
			user: 'Ahmed Sami Mohamed',
			username: '@w9ahmed',
			tweet: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			time: '45s',
			retweets: 1,
			favorites: 1
		}];
	});

})();