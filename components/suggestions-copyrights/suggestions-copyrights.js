app.directive('suggestionsCopyrights', function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('components/suggestions-copyrights/suggestions-copyrights')
	}
});