app.directive('navigation', function() {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'app/navigation/navigation.html',
		controller: function($scope, $rootScope) {
		}
	}
});