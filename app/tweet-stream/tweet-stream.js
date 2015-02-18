app.directive('tweetStream', function () {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'app/tweet-stream/tweet-stream.html',
		controller: function($scope, $rootScope) {
			$scope.setProfile = function(tweet) {
				$rootScope.currentProfile = tweet;
			}
		}
	}
});