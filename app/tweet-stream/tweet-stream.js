app.directive('tweetStream', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/tweet-stream/tweet-stream'),
		controller: function($http, $scope, $rootScope) {

			$scope.getData = function() {
				$http.get("json/tweets.json")
					.success(function(data, status) {
						$scope.tweets = data;
						$rootScope.tweets = data;
					});
			}

			$scope.setProfile = function(tweet) {
				$rootScope.currentProfile = tweet;
			}

			$scope.getData();
		}
	};
});