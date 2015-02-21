app.directive('streamBar', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('components/stream-bar/stream-bar'),
		controller: function($scope, $rootScope) {

			$rootScope.bartext = $scope.bartext;

		}
	};
});