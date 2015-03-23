app.directive('tweetStream', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/tweet-stream/tweet-stream'),
		controller: function($http, $scope, $rootScope) {

			$rootScope.getTweets = function() {
				$http.get("/api/tweets")
					.success(function(data, status) {
						$scope.tweets = data;
						$rootScope.tweets = data;
					});
			}

			$scope.setProfile = function(tweet) {
				$rootScope.currentProfile = tweet;
			}

			$rootScope.getTweets();
		}
	};
});