app.directive('dashboardProfile', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/dashboard-profile/dashboard-profile'),
		controller: ['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {

			$scope.getData = function() {
				$http.get("json/user.json")
					.success(function(data) {
						$scope.content = data;
					});
			};

			$scope.getData();
		}]
	};
});