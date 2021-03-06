app.directive('suggestions', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('components/suggestions/suggestions'),
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

			$scope.close = function(suggestion) {
				suggestion.dismiss = true;
			}

			$scope.toggle = function(suggestion) {
				suggestion.followed = !suggestion.followed;
			};

		}
	};
});