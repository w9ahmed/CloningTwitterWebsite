app.directive('credits', function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/credits/credits')
	}
});