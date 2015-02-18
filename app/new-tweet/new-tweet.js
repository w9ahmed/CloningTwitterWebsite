app.directive('newTweet', function () {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'app/new-tweet/new-tweet.html',
		controller: function($scope, $rootScope) {

			$scope.sendTweet = function(tweet) {
				tweet.time = Date.now();
				tweet.user = 'Ahmed Sami Mohamed';
				tweet.username = '@w9ahmed';
				tweet.retweets = 0;
				tweet.favorites = 0;
				tweet.self = true;

				$rootScope.tweets.push(tweet);
				Twitter.showNewTweets(1);
			}

		}
	}
});