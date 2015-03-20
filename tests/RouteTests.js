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
		expect($route.current.loadedTemplateUrl).toBe('pages/home/home.html');
		expect($route.current.templateUrl).toBe('pages/home/home.html');
		expect($route.current.controller).toBe('HomeCtrl');
		expect($route.current.title).toBe('Home');
	});

	it('should load home page', function() {

		backend.expectGET('pages/home/home.html').respond(200, 'Home Page');

		$location.path('/');

		$rootScope.$digest();
		expect($location.path()).toBe('/');
		expect($route.current.loadedTemplateUrl).toBe('pages/home/home.html');
		expect($route.current.templateUrl).toBe('pages/home/home.html');
		expect($route.current.controller).toBe('HomeCtrl');
		expect($route.current.title).toBe('Home');
	});

	it('should load notifications page', function() {

		backend.expectGET('pages/notifications/notifications.html').respond(200, 'Notifications Page');

		$location.path('/notifications');

		$rootScope.$digest();
		expect($location.path()).toBe('/notifications');
		expect($route.current.loadedTemplateUrl).toBe('pages/notifications/notifications.html');
		expect($route.current.templateUrl).toBe('pages/notifications/notifications.html');
		expect($route.current.controller).toBe('NotificationsCtrl');
		expect($route.current.title).toBe('Notifications');
	});


	it('should load discover page', function() {

		backend.expectGET('pages/discover/discover.html').respond(200, 'Discover Page');

		$location.path('/discover');

		$rootScope.$digest();
		expect($location.path()).toBe('/discover');
		expect($route.current.loadedTemplateUrl).toBe('pages/discover/discover.html');
		expect($route.current.templateUrl).toBe('pages/discover/discover.html');
		expect($route.current.controller).toBe('DiscoverCtrl');
		expect($route.current.title).toBe('Discover');
	});

});