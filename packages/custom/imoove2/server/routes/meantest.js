(function() {
	'use strict';

	module.exports = function(Meantest, app) {
		var iMooveTest = require('../controllers/imoove2_test_controllers')();

		app.get('/api/meantest/getdata', function(req, res) {
			iMooveTest.getdata(req, res);
		});

		app.post('/api/meantest/putdata', function(req, res) {
			iMooveTest.putdata(req, res);
		});
	};
})();
