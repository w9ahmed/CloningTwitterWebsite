app.directive('tweeterProfile', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/tweeter-profile/tweeter-profile'),
		controller: function($scope, $rootScope) {
			
		}
	}
});