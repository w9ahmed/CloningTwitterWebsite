app.directive('dashboardProfile', function ($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('app/dashboard-profile/dashboard-profile')
	}
});