var app = angular.module("twitter", ['ngRoute', 'angularMoment'])

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				redirectTo: '/'
			})
			.when('/', {
				templateUrl: 'pages/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'HomeCtrl',
				title: 'Home'
			})
			.when('/notifications', {
				templateUrl: 'pages/notifications/notifications.html',
				controller: 'NotificationsCtrl',
				controllerAs: 'NotificationsCtrl',
				title: 'Notifications'
			})
			.when('/discover', {
				templateUrl: 'pages/discover/discover.html',
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
	})

	.service('Navigation', function($rootScope) {

		this.setActiveTab = function(tab) {
			$rootScope.homeTab = false;
			$rootScope.notiTab = false;
			$rootScope.discTab = false;

			switch(tab) {
			    case 'home':
			        $rootScope.homeTab = true;
			        break;
			    case 'notifications':
			        $rootScope.notiTab = true;
			        break;
		        case 'discover':
		        	$rootScope.discTab = true;
		        	break;
			}
		};

		this.home = function() {
			$rootScope.homeTab = true;
		};

		this.notifications = function() {
			$rootScope.notiTab = true;
		};

		this.discover = function() {
			$rootScope.discTab = true;
		};
	})

	// Should be removed after learning
	.controller('TestCtrl', function($scope, $rootScope, $http, $interval, $timeout, $log) {

		$scope.intervalCounter = 0;
		$scope.timerCounter = 0;

		$interval(function() {
			$scope.intervalCounter++;
		}, 5000, 10);

		$timeout(function() {
			$scope.timerCounter++;
		}, 5000);

		$http.get("/json/messages.json")
			.success(function (data) {
				$scope.messages = data;
				$log.log("There are " + data.length + " items.");
			});

		$scope.counter = 0;

		$scope.incrementCounter = function() {
			$scope.counter++;
		};
	})