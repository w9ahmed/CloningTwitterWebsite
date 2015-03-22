describe('Testing direct messages directive', function() {

	var $scope, $compile, $rootScope, backend, element;

	var data = readJSON('tests/fixtures/messages.json');

	beforeEach(module("twitter"));

	beforeEach(inject(function(_$compile_, _$rootScope_, $httpBackend) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		backend = $httpBackend;

		$httpBackend.expectGET("/json/messages.json");
        $httpBackend.whenGET("/json/messages.json").respond(data);

        element = $compile("<direct-messages></direct-messages>")($rootScope);

        $rootScope.$digest();
	}));

	it('Replaces the element with the appropriate contents', function() {
		expect(element.html()).toContain('<div class="modal fade" id="directMessages" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">');
	});
	
});