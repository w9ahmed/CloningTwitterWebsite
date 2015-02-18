app.directive('flash', function () {
	return {
		restrict: 'E',
		scope: true,
		template: '<div ng-click="show" class="panel flash-notification">Your Tweet was posted!</div>',
		controller: function($scope, $rootScope) {

			$scope.show = function () {
				$('.flash-notification').fadeOut();
				$('.navbar').removeClass('shadow-down');
			}

		}
	};
});