app.controller('HomeCtrl', function($scope, $rootScope, $http, $route, $routeParams, $location, Navigation) {
	this.name = 'HomeCtrl';
	this.$location = $location;
	$rootScope.currentPage = "Home";

	$http.get('/api/tweets').success(function(data) {
		console.log(data);
	});
});