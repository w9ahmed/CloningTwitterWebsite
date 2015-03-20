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

	it('should redirect to home page', function() {

		backend.expectGET('pages/home/home.html').respond(200, 'Home Page');

		expect($location.path()).toBe('/');
		$location.path('/home');

		$rootScope.$digest();
		expect($location.path()).toBe('/');
		expect($route.current.controller).toBe('HomeCtrl');
	});

	it('should load home page', function() {

		backend.expectGET('pages/home/home.html').respond(200, 'Home Page');

		$location.path('/');

		$rootScope.$digest();
		expect($location.path()).toBe('/');
		expect($route.current.controller).toBe('HomeCtrl');
	});

	it('should load notifications page', function() {

		backend.expectGET('pages/notifications/notifications.html').respond(200, 'Notifications Page');

		$location.path('/notifications');

		$rootScope.$digest();
		expect($location.path()).toBe('/notifications');
		expect($route.current.controller).toBe('NotificationsCtrl');
	});


	it('should load discover page', function() {

		backend.expectGET('pages/discover/discover.html').respond(200, 'Discover Page');

		$location.path('/discover');

		$rootScope.$digest();
		expect($location.path()).toBe('/discover');
		expect($route.current.controller).toBe('DiscoverCtrl');
	});

});