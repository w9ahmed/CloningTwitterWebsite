app.directive('newTweet', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/new-tweet/new-tweet'),
		controller: function($scope, $rootScope, $http) {

			$scope.sendTweet = function(tweet) {
				tweet.time = Date.now();
				tweet.user = 'Ahmed Sami Mohamed';
				tweet.username = '@w9ahmed';
				tweet.retweets = 0;
				tweet.favorites = 0;
				tweet.self = true;

				$rootScope.bartext = 1;
				$rootScope.tweets.push(tweet);
			};

		}
	}
});