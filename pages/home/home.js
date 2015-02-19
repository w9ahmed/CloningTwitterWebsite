app.controller('HomeCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'HomeCtrl';
	this.$location = $location;

	$rootScope.homeTab = true;
	$rootScope.notiTab = false;
	$rootScope.discTab = false;
});