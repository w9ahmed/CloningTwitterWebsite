app.directive('suggestions', function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/suggestions/suggestions')
	}
});