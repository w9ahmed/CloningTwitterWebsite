app.controller('NotificationsCtrl', function($scope, $rootScope, $route, $routeParams, $location, Navigation) {
	this.name = 'NotificationsCtrl';
	this.$location = $location;
	Navigation.notifications();

	$scope.list = ["Notifications", "Mentions"];
});