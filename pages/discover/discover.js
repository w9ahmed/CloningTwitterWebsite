app.controller('DiscoverCtrl', function($scope, $rootScope, $route, $routeParams, $location, Navigation) {
	this.name = 'DiscoverCtrl';
	this.$location = $location;

	Navigation.discover();

	$scope.list = ["Tweets", "Activity", "Who to follow", 
		"Find friends", "Popular accounts"];
});