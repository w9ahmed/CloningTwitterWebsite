app.controller('DiscoverCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'DiscoverCtrl';
	this.$location = $location;

	$rootScope.homeTab = false;
	$rootScope.notiTab = false;
	$rootScope.discTab = true;
});