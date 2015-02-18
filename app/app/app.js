var app = angular.module("twitter", ['ngRoute', 'angularMoment'])

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				redirectTo: '/'
			})
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'HomeCtrl',
				title: 'Home'
			})
			.when('/notifications', {
				templateUrl: 'pages/notifications.html',
				controller: 'NotificationsCtrl',
				controllerAs: 'NotificationsCtrl',
				title: 'Notifications'
			})
			.when('/discover', {
				templateUrl: 'pages/discover.html',
				controller: 'DiscoverCtrl',
				controllerAs: 'DiscoverCtrl',
				title: 'Discover'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	})

	.constant('angularMomentConfig', {
	})

	.run(['$location', '$rootScope', function($location, $rootScope) {
	    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
	        $rootScope.title = current.$$route.title;
	    });
	}])

	.controller('MainCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
			$scope.$route = $route;
			$scope.$location = $location;
			$scope.$routeParams = $routeParams;

	});

/* *************** PAGE CONTROLLERS *************** */
app.controller('HomeCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'HomeCtrl';
	this.$location = $location;

	$rootScope.homeTab = true;
	$rootScope.notiTab = false;
	$rootScope.discTab = false;
});

app.controller('NotificationsCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'NotificationsCtrl';
	this.$location = $location;

	$rootScope.homeTab = false;
	$rootScope.notiTab = true;
	$rootScope.discTab = false;
});

app.controller('DiscoverCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'DiscoverCtrl';
	this.$location = $location;

	$rootScope.homeTab = false;
	$rootScope.notiTab = false;
	$rootScope.discTab = true;
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
	this.contents = ["\u00A9 2014 Twitter", "About", "Help", "Terms", "Privacy", "Cookies", "Ads info", "Brand", "Blog", "Status", "Apps", "Jobs", "Advertise", "Businesses", "Media", "Developers"];
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