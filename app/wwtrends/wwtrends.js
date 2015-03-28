app.directive('wwtrends', function($templateCache) {
	return {
		restrict: 'E',
		scope: true,
		template: $templateCache.get('app/wwtrends/wwtrends'),
		controller: function($scope, $http) {
			$scope.trends = ['#AskSuperwomanLIVE', '#OlimpiadasDoRangelPt1',
				'#TodoBienHastaQue', '#5HNoPontoPop', '#yourefired', "John O'Shea",
				'Richard Flanagan', 'Lorik Cana', 'Chiles', 'Lord Sugar'];
		}
	};
});