// Arrange - Act - Assert
describe('First Test', function () {
	var counter;

	beforeEach(function () {
		counter = 0;
	});

	it("increments value", function() {
		counter++;
		expect(counter).toEqual(1);
	});

	it("decrement value", function() {
		counter--;
		expect(counter).toEqual(-1);
	});
});