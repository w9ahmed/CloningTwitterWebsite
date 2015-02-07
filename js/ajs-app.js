
var app = angular.module("twitter", ['ngRoute'])

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/index.html', {
				redirectTo: '/'
			})
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'StreamCtrl',
				controllerAs: 'StreamCtrl'
			})
			.when('/notifications.html', {
				templateUrl: 'pages/notifications.html'
			})
			.when('/discover.html', {
				templateUrl: 'pages/discover.html'
			})

		$locationProvider.html5Mode(true);
	})

	.controller('MainCtrl', function($scope, $route, $routeParams, $location) {
			$scope.$route = $route;
			$scope.$location = $location;
			$scope.$routeParams = $routeParams;
	})

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
app.controller('StreamCtrl', function($scope, $http) {
	var self = this;
	this.tweets = [];
	$http.get("/json/tweets.json")
		.success(function(data, status) {
			self.tweets = data;
		});
	$scope.header = "Bob";
});

// Direct Messages Controller
app.controller('DMCtrl', function($http) {
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
		templateUrl: 'directives/new-tweet.html'
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