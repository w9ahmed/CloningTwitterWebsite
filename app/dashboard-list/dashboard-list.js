app.directive('dashboardList', function($templateCache) {
	return {
		restrict: 'E',
		scope: {
			list: '='
		},
		template: $templateCache.get('app/dashboard-list/dashboard-list'),
		controller: function($scope) {

		}
	};
});