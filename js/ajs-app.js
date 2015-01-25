(function () {
	var app = angular.module("twitter", []);

	/* ***************	CONTROLLERS	*************** */
	// Dashboard Controller
	app.controller('DashboardCtrl', function() {
		this.content = [
		{
			name: 'Tweets',
			value: '46.9k'
		},
		{
			name: 'Following',
			value: '306'
		},
		{
			name: 'Followers',
			value: '305'
		},
		];
	});

	// WorldWide Trends Controller
	app.controller('WWTrendsCtrl', function() {
		this.trends = ['#AskSuperwomanLIVE', '#OlimpiadasDoRangelPt1', '#TodoBienHastaQue', '#5HNoPontoPop', '#yourefired', "John O'Shea", 'Richard Flanagan', 'Lorik Cana', 'Chiles', 'Lord Sugar'];
	});

	// Who to follow Controller
	app.controller('WhoToFollowCtrl', function() {
		this.suggestions = [
			{
				user: 'Oliver Hardy',
				username: '@ollie'
			},
			{
				user: 'Laurel Stanley',
				username: '@stan'
			}
		];
	});

	// Credit and Abouts Controller
	app.controller('AboutsCtrl', function() {
		this.contents = ["&copy; 2014 Twitter", "About", "Help", "Terms", "Privacy", "Cookies", "Ads info", "Brand", "Blog", "Status", "Apps", "Jobs", "Advertise", "Businesses", "Media", "Developers"];
	});

	// Tweets Stream Controller
	app.controller('StreamCtrl', function($http) {
		var parent = this;
		this.tweets = [];
		$http.get("../json/tweets.json")
			.success(function(data, status) {
				parent.tweets = data;
			});
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
	/* *************** 	***********	*************** */

	/* ***************	DIRECTIVES	*************** */
	app.directive('navigation', function() {
		return {
			restrict: 'E',
			templateUrl: '../template/navigation.html'
		}
	});

	app.directive('tweetStream', function () {
		return {
			restrict: 'E',
			templateUrl: '../template/tweet-stream.html'
		}
	});

	app.directive('newTweet', function () {
		return {
			restrict: 'E',
			templateUrl: '../template/new-tweet.html'
		}
	});

	app.directive('directMessages', function () {
		return {
			restrict: 'E',
			templateUrl: '../template/direct-messages.html'
		}
	});

	app.directive('dashboardProfile', function () {
		return {
			restrict: 'E',
			templateUrl: '../template/dashboard-profile.html'
		}
	});

	app.directive('tweeterProfile', function () {
		return {
			restrict: 'E',
			templateUrl: '../template/tweeter-profile.html'
		}
	});

	app.directive('suggestions', function() {
		return {
			restrict: 'E',
			templateUrl: '../template/suggestions.html'
		}
	});

	app.directive('credits', function() {
		return {
			restrict: 'E',
			templateUrl: '../template/credits.html'
		}
	});

	app.directive('wwtrends', function() {
		return {
			restrict: 'E',
			templateUrl: '../template/wwtrends.html'
		}
	});

	app.directive('flash', function () {
		return {
			restrict: 'E',
			scope: true,
			template: '<div class="panel flash-notification">Your Tweet was posted!</div>',
			controller: function() {
				$('.flash-notification').click(function() {
					$('.flash-notification').fadeOut();
					$('.navbar').removeClass('shadow-down');
				});
			}
		};
	});
	/* *************** 	**********	*************** */

})();