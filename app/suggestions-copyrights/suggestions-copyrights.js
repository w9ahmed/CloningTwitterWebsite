app.directive('suggestionsCopyrights', function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/suggestions-copyrights/suggestions-copyrights')
	}
});