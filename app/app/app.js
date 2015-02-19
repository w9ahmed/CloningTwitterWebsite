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

	});

/* ***************	 SECTIONS	*************** */

app.directive('suggestionsCopyrights', function() {
	return {
		restrict: 'E',
		templateUrl: 'sections/suggestions-copyrights.html'
	}
});

/* *************** 	***********	*************** */