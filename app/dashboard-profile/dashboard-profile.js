app.directive('dashboardProfile', function ($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/dashboard-profile/dashboard-profile'),
		controller: ['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {

			$scope.getUser = function() {
				$http.get("/api/users/55148444ebf337840e03cdc7")
					.success(function(data) {
						$scope.user = data;
						$rootScope.user = $scope.user;
					});
			};

			$scope.getUser();
		}]
	};
});