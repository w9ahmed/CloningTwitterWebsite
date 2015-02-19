app.directive('credits', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/credits/credits'),
		controller: function($scope) {
			$scope.contents = ["\u00A9 2014 Twitter", "About", "Help",
				"Terms", "Privacy", "Cookies", "Ads info", "Brand", "Blog",
				"Status", "Apps", "Jobs", "Advertise", "Businesses", "Media", "Developers"];
		}
	};
});