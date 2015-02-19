app.directive('suggestions', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/suggestions/suggestions'),
		controller: function($scope) {
			$scope.suggestions = [
				{
					user: 'Oliver Hardy',
					username: '@ollie'
				},
				{
					user: 'Laurel Stanley',
					username: '@stan'
				}
			];
		}
	};
});