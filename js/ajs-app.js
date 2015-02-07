
var app = angular.module("twitter", ['ngRoute', 'angularMoment'])

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				redirectTo: '/'
			})
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'HomeCtrl'
			})
			.when('/notifications', {
				templateUrl: 'pages/notifications.html',
				// controller: 'NotificationsCtrl',
				// controllerAs: 'NotificationsCtrl'
			})
			.when('/discover', {
				templateUrl: 'pages/discover.html',
				// controller: 'DiscoverCtrl',
				// controllerAs: 'DiscoverCtrl'
			});

		$locationProvider.html5Mode(true);
	})

	.constant('angularMomentConfig', {
	})

	.controller('MainCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
			$scope.$route = $route;
			$scope.$location = $location;
			$scope.$routeParams = $routeParams;

			$rootScope.navigation = function(tab) {
				$('ul.nav li').removeClass('active');
				$('#' + tab + 'Tab').addClass('active');
			}
	});

/* *************** PAGE CONTROLLERS *************** */
app.controller('HomeCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'HomeCtrl';
	this.$location = $location;

	$rootScope.navigation('home');
});

app.controller('NotificationsCtrl', function($scope, $route, $routeParams, $location) {
	this.name = 'NotificationsCtrl';
	this.$location = $location;

	$rootScope.navigation('noti');
});

app.controller('DiscoverCtrl', function($scope, $route, $routeParams, $location) {
	this.name = 'DiscoverCtrl';
	this.$location = $location;

	$rootScope.navigation('discover');
});
/* *************** 	***********	*************** */

/* ***************	CONTROLLERS	*************** */
// Dashboard Controller
app.controller('DashboardCtrl', function($http) {
	var parent = this;
	this.content = [];
	$http.get("/json/user.json")
		.success(function(data) {
			parent.content = data;
		});
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
app.controller('StreamCtrl', function($scope, $rootScope, $http) {
	var self = this;
	this.tweets = [];
	$http.get("/json/tweets.json")
		.success(function(data, status) {
			self.tweets = data;
			$rootScope.tweets = data;
		});
});

// Direct Messages Controller
app.controller('DMCtrl', function($scope, $rootScope, $http) {
	var self = this;
	this.messages = [];
	$http.get("/json/messages.json")
		.success(function(data) {
			self.messages = data;
		});
});	
/* *************** 	***********	*************** */

/* ***************	 SECTIONS	*************** */

app.directive('suggestionsCopyrights', function() {
	return {
		restrict: 'E',
		templateUrl: 'sections/suggestions-copyrights.html'
	}
});

/* *************** 	***********	*************** */

/* ***************	DIRECTIVES	*************** */
app.directive('navigation', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/navigation.html',
		controller: function() {

		}
	}
});

app.directive('tweetStream', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/tweet-stream.html'
	}
});

app.directive('newTweet', function () {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'directives/new-tweet.html',
		controller: function($scope, $rootScope) {

			$scope.sendTweet = function(tweet) {
				tweet.time = Date.now();
				tweet.user = 'Ahmed Sami Mohamed';
				tweet.username = '@w9ahmed';
				tweet.retweets = 0;
				tweet.favorites = 0;
				tweet.self = true;

				$rootScope.tweets.push(tweet);
				Twitter.showNewTweets(1);
			}

		}
	}
});

app.directive('directMessages', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/direct-messages.html'
	}
});

app.directive('dashboardProfile', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/dashboard-profile.html'
	}
});

app.directive('tweeterProfile', function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/tweeter-profile.html'
	}
});

app.directive('suggestions', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/suggestions.html'
	}
});

app.directive('credits', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/credits.html'
	}
});

app.directive('wwtrends', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/wwtrends.html'
	}
});

app.directive('flash', function () {
	return {
		restrict: 'E',
		scope: true,
		template: '<div ng-click="show" class="panel flash-notification">Your Tweet was posted!</div>',
		controller: function($scope, $rootScope) {

			$scope.show = function () {
				$('.flash-notification').fadeOut();
				$('.navbar').removeClass('shadow-down');
			}

		}
	};
});
/* *************** 	**********	*************** */