(function () {
	var app = angular.module("twitter", []);

	app.controller("DashboardController", function() {
		this.message = "This is the end!";
	});

	app.controller('WWTrendsCtrl', function() {
		this.trends = ['#AskSuperwomanLIVE', '#OlimpiadasDoRangelPt1', '#TodoBienHastaQue', '#5HNoPontoPop', '#yourefired', "John O'Shea", 'Richard Flanagan', 'Lorik Cana', 'Chiles', 'Lord Sugar'];
	});
})();