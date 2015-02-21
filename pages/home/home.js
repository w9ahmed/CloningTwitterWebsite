app.controller('HomeCtrl', function($scope, $rootScope, $route, $routeParams, $location, Navigation) {
	this.name = 'HomeCtrl';
	this.$location = $location;
	Navigation.home();
});