'use strict';

var mongoose = require('mongoose'),
IMooveTest = mongoose.model('iMooveTest');

module.exports = function() {
	return {
		putdata: function(req, res) {
			var imoovetest = new IMooveTest();
			imoovetest.data = req.body.data;
			imoovetest.save(function(err) {
				if (err) {
					res.send(400);
				}
				res.send(200);
			});
		},
		getdata: function(req, res) {
			IMooveTest.find({}, function(err,getdata){
				if(err){
					throw err;
				}
				res.send(getdata);
			});
		}
	};
};