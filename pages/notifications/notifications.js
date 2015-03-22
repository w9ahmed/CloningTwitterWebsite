app.controller('NotificationsCtrl', function($scope, $rootScope, $route, $routeParams, $location, Navigation) {
	this.name = 'NotificationsCtrl';
	this.$location = $location;
	$rootScope.currentPage = "Notifications";

	$scope.list = ["Notifications", "Mentions"];
});