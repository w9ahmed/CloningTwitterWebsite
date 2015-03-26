app.directive('tweetBox', function($templateCache) {
	return {
		restrict: 'E',
		scope: {
			tweet: '='
		},
		template: $templateCache.get('components/tweet-box/tweet-box'),
		controller: function($scope, $rootScope, $http) {

			$scope.retweet = function() {
				if($scope.tweet.retweeted) {
					$scope.tweet.retweets--;
				} else {
					$scope.tweet.retweets++;
				}
				$scope.tweet.retweeted = !$scope.tweet.retweeted;
				$scope.update();
			};

			$scope.favorite = function() {
				if($scope.tweet.favorited) {
					$scope.tweet.favorites--;
				} else {
					$scope.tweet.favorites++;
				}
				$scope.tweet.favorited = !$scope.tweet.favorited;
				$scope.update();
			};

			$scope.delete = function() {
				$http.delete('/api/tweets/' + $scope.tweet._id)
					.success(function () {
						$rootScope.getTweets();
						$rootScope.user.tweets--;
						$http.put('/api/users/' + $rootScope.user._id + '/tweets',
						 $rootScope.user);
					});
			};

			$scope.update = function() {
				$http.put('/api/tweets/' + $scope.tweet._id, $scope.tweet)
					.success(function () {
						$scope.getTweet();
					})
			};

			$scope.getTweet = function() {
				$http.get('/api/tweets/' + $scope.tweet._id)
					.success(function (data) {
						$scope.tweet = data;
					});
			};
			
		}
	};
});