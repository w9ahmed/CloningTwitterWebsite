app.directive('tweetBox', function($templateCache) {
	return {
		restrict: 'E',
		scope: {
			tweet: '='
		},
		template: $templateCache.get('components/tweet-box/tweet-box'),
		controller: function($scope) {

		}
	};
});