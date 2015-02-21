app.directive('tweetBox', function($templateCache) {
	return {
		restrict: 'E',
		scope: {
			tweet: '='
		},
		template: $templateCache.get('components/tweet-box/tweet-box'),
		controller: function($scope) {

			$scope.retweet = function() {
				if($scope.tweet.retweeted) {
					$scope.tweet.retweets--;
				} else {
					$scope.tweet.retweets++;
				}
				$scope.tweet.retweeted = !$scope.tweet.retweeted;
			};

			$scope.favorite = function() {
				if($scope.tweet.favorited) {
					$scope.tweet.favorites--;
				} else {
					$scope.tweet.favorites++;
				}
				$scope.tweet.favorited = !$scope.tweet.favorited;
			};
			
		}
	};
});