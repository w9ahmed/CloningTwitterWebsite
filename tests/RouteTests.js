describe('RouteTest', function() {

	beforeEach(module("twitter"));

	var $location, $route, $rootScope, backend;

	beforeEach(inject(function (_$location_, _$route_, _$rootScope_) {
		$location = _$location_;
		$route = _$route_;
		$rootScope = _$rootScope_;
	}));

	beforeEach(inject(function($httpBackend) {
		backend = $httpBackend;
	}));

	it('should load page moderate', function() {

		backend.expectGET('pages/home/home.html').respond(200, 'Home Page');

		$location.path('/');

		$rootScope.$digest();
		expect($location.path()).toBe('/');
		expect($route.current.controller).toBe('HomeCtrl');
	});
});