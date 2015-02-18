app.directive('directMessages', function ($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/direct-messages/direct-messages')
	}
});