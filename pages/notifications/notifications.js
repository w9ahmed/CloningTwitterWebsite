app.controller('NotificationsCtrl', function($scope, $rootScope, $route, $routeParams, $location) {
	this.name = 'NotificationsCtrl';
	this.$location = $location;

	$rootScope.homeTab = false;
	$rootScope.notiTab = true;
	$rootScope.discTab = false;
});