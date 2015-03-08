describe("Directive Tests", function() {

	var mockScope;
	var compileService;

	beforeEach(angular.mock.module("twitter"));

	beforeEach(angular.mock.inject(function ($rootScope, $compile) {
		mockScope = $rootScope.$new();
		compileService = $compile;
		mockScope.data = [
			{
				"user": "Ahmed Ezzat",
				"username": "@is7yX",
				"message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
				"time": "Oct 23"
			},
			{
				"user": "Jack McCord",
				"username": "@jackie",
				"message": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"time": "Aug 23"
			},
			{
				"user": "Spazie MacGuy",
				"username": "@spazem",
				"message": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				"time": "Aug 20"
			}
		];
	}));

	it("Generates list elements", function() {
		var compileFn = compileService("<div unordered-list='data'></div>");
		var elem = compileFn(mockScope);

		expect(elem.children("ul").length).toEqual(1);
		expect(elem.find("li").length).toEqual(3);

		expect(elem.find("li").eq(0).text()).toEqual("Ahmed Ezzat");
		expect(elem.find("li").eq(1).text()).toEqual("Jack McCord");
		expect(elem.find("li").eq(2).text()).toEqual("Spazie MacGuy");
	});

});