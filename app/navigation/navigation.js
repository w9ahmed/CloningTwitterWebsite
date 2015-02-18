app.directive('navigation', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get("app/navigation/navigation"),
		controller: function($scope, $rootScope) {
		}
	}
});