'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var iMoove2TestSchema = new Schema({
	data: String
});

mongoose.model('iMooveTest', iMoove2TestSchema);