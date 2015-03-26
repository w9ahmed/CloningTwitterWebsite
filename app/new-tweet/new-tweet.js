app.directive('newTweet', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/new-tweet/new-tweet'),
		controller: function($scope, $rootScope, $http) {

			$scope.sendTweet = function(tweet) {
				tweet.time = new Date();
				tweet.user = 'Ahmed Sami Mohamed';
				tweet.username = '@w9ahmed';
				tweet.userId = $rootScope.user._id;
				tweet.userData = $rootScope.user;
				tweet.retweets = 0;
				tweet.favorites = 0;
				tweet.self = true;

				$http.post('/api/tweets', tweet)
					.success(function() {
						// $rootScope.bartext = 1;
						$rootScope.getTweets();
						$rootScope.user.tweets++;
						$http.put('/api/users/' + $rootScope.user._id + '/tweets',
						 $rootScope.user);
					});
			};

		}
	}
});