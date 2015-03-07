// karma start karma.config.js
describe("Controller Test", function () {
	// Arrange
	var mockScope = {};
	var controller, backend, mockInterval, mockTimeout, mockLog;

	// You can also, angular.mock.module
	beforeEach(module("twitter"));

	beforeEach(angular.mock.inject(function ($httpBackend) {
		backend = $httpBackend;
		backend.expect("GET", "/json/messages.json").respond(
			[
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
			]);
	}));

	beforeEach(angular.mock.inject(function ($controller, $rootScope, $http, $interval, $timeout, $log) {
		mockScope = $rootScope.$new();
		mockInterval = $interval;
		mockTimeout = $timeout;
		mockLog = $log;
		controller = $controller("TestCtrl", {
			$scope: mockScope,
			$http: $http,
			$interval: mockInterval,
			$timeout: mockTimeout,
			$log: mockLog
		});

		backend.flush();
	}));

	// Act and Assess
	it("Create variable", function () {
		expect(mockScope.counter).toEqual(0);
	});

	it("Increments counter", function () {
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});

	it("Makes an Ajax request", function () {
		backend.verifyNoOutstandingExpectation();
	});

	it("Processes the data", function () {
		expect(mockScope.messages).toBeDefined();
		expect(mockScope.messages.length).toEqual(3);
	});

	it("Preserves the data order", function() {
		expect(mockScope.messages[0].user).toEqual("Ahmed Ezzat");
		expect(mockScope.messages[1].user).toEqual("Jack McCord");
		expect(mockScope.messages[2].user).toEqual("Spazie MacGuy");
	});

	it("Limits interval to 10 updates", function () {
		for(var i = 0; i < 11; i++) {
			mockInterval.flush(5000);
		}
		expect(mockScope.intervalCounter).toEqual(10);
	});

	it("Increments timer counter", function () {
		mockTimeout.flush(5000);
		expect(mockScope.timerCounter).toEqual(1);
	});

	it("Writes log messages", function () {
		expect(mockLog.log.logs.length).toEqual(1);
	});

});