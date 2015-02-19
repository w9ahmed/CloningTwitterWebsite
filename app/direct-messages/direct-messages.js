app.directive('directMessages', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/direct-messages/direct-messages'),
		controller: function($http, $scope, $rootScope) {

			$scope.getData = function() {
				$http.get("/json/messages.json")
					.success(function(data) {
						$scope.messages = data;
					});
			};

			$scope.getData();
		}
	};
});