app.directive('tweetStream', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/tweet-stream/tweet-stream'),
		controller: function($scope, $rootScope) {
			$scope.setProfile = function(tweet) {
				$rootScope.currentProfile = tweet;
			}
		}
	}
});