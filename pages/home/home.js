app.controller('HomeCtrl', function($scope, $rootScope, $http, $route, $routeParams, $location, Navigation) {
	this.name = 'HomeCtrl';
	this.$location = $location;
	$rootScope.currentPage = "Home";

});