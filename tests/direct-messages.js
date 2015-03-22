describe('Testing direct messages directive', function() {

	var $compile, $rootScope, backend;

	var data = readJSON('tests/fixtures/messages.json');

	beforeEach(module("twitter"));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	beforeEach(inject(function($httpBackend) {
		$httpBackend.expectGET("/json/messages.json");
        $httpBackend.whenGET("/json/messages.json").respond(data);
	}));

	it('Replaces the element with the appropriate contents', function() {

		var element = $compile("<direct-messages></direct-messages>")($rootScope);

		$rootScope.$digest();

		expect(element.html()).toContain('<div class="modal fade" id="directMessages" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">');
	});

	it('should behave...', function() {
		// code...
	});
	
});