(function () {
	var app = angular.module("twitter", []);

	// WorldWide Trends Controller
	app.controller('WWTrendsCtrl', function() {
		this.trends = ['#AskSuperwomanLIVE', '#OlimpiadasDoRangelPt1', '#TodoBienHastaQue', '#5HNoPontoPop', '#yourefired', "John O'Shea", 'Richard Flanagan', 'Lorik Cana', 'Chiles', 'Lord Sugar'];
	});

	// Credit and Abouts Controller
	app.controller('AboutsCtrl', function() {
		this.contents = ["&copy; 2014 Twitter", "About", "Help", "Terms", "Privacy", "Cookies", "Ads info", "Brand", "Blog", "Status", "Apps", "Jobs", "Advertise", "Businesses", "Media", "Developers"];
	});

	// Tweets Stream Controller
	app.controller('StreamCtrl', function() {
		this.tweets = [
		{
			user: 'Ahmed Sami Mohamed',
			username: '@w9ahmed',
			tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			time: '45s',
			retweets: 5,
			favorites: 3,
			self: true
		},
		{
			user: 'Ahmed Ezzat',
			username: '@is7yX',
			tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			time: '1m',
			retweets: 3,
			favorites: 3,
			self: false
		},
		{
			user: 'Ahmed Sami Mohamed',
			username: '@w9ahmed',
			tweet: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			time: '45s',
			retweets: 1,
			favorites: 1,
			self: true
		}];
	});

	// Direct Messages Controller
	app.controller('DMCtrl', function() {
		this.messages = [
		{
			user: 'Ahmed Ezzat',
			username: '@is7yX',
			message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			time: 'Oct 23'
		},
		{
			user: 'Jack McCord',
			username: '@jackie',
			message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			time: 'Aug 23'
		},
		{
			user: 'Spazie MacGuy',
			username: '@spazem',
			message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			time: 'Aug 20'
		}
		];
	});

})();