app.directive('wwtrends', function($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/wwtrends/wwtrends')
	}
});