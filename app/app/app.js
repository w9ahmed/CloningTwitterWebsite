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

	// Should be removed after learning
	.filter("labelCase", function() {
		return function(value, reverse) {
			if(angular.isString(value)) {
				var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
				return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
			} else {
				return value;
			}
		};
	})

	// Should be removed after learning
	.directive('unorderedList', function() {
		return function(scope, element, attrs) {
			var data = scope[attrs["unorderedList"]];
			if(angular.isArray(data)) {
				var listElem = angular.element("<ul>");
				element.append(listElem);
				for (var i = 0; i < data.length; i++) {
					listElem.append(angular.element('<li>').text(data[i].user));
				}
			}
		}
	})

	// Shoudl be removed after learning
	.factory('counterService', function() {
		var counter = 0;
		return {
			incrementCounter: function() {
				counter++;
			}, 
			getCounter: function() {
				return counter;
			}
		}
	});