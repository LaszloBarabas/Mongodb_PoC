// load the mongoose schema 
//
var mongoose = require('mongoose'); 

// creat the first schema 
var Schema = mongoose.Schema; 

// creeat the student Schema 
//
var studentSchema = new Schema ({
	name: { type: String, required: true},
	faculty: {type: String, required: true}

	}, {
		// created at and Update at 
		timestamps:true 
	}); 

// Create the model 
//
 var Students = mongoose.model('student', studentSchema); 

// export it to the other moduls
//
module.exports = Students; 

