
// load the mongoose 

var  mongoose = require ('mongoose'); 

// load the configuration module 
var config = require('./config'); 


// load the model Students 

var Students = require('./models/students'); 


// connect to the db 
//
mongoose.connect(config.mongourl); 
// create the db handler 
var db = mongoose.connection; 

// register some actions on different events 
//
db.on('error', console.error.bind(console, 'Connection error:')); 
db.once('open',   function (){ 
	// connected 
	console.log('Connected to the mongolab server. ');  

	// create a first Student based on the  Schema 
	
	var newStudent = Students({
		name: 'Barabas', 
		faculty: 'Computer NonScience'
	}); 


	// push it to the db 
	//
	newStudent.save( function (err) { 

		if (err) throw err; 

		console.log ('New Student saved to the db'); 
	}); 

	// list all the students
	//
	Students.find({}, function ( err, studentlist) {
		if (err) throw err; 

		console.log(studentlist); 

		// drop all teh collections of students 
		//
		//db.collection('Students').drop ( function () { 
			db.close(); 

		//}); 
	});

}); 




