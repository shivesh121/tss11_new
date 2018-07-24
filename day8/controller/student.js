var express = require('express');
var routes = express.Router();
var student = require("../models/student");
var city = require("../models/city");

routes.get("/", function(req, res){



	student.selectAll(function(err, result1){
		city.selectAll(function(err, result2){
			result1 = JSON.parse(JSON.stringify(result1));
			result2 = JSON.parse(JSON.stringify(result2));
			var pageData = { title : "Student", pagename : "student/index", stu : result1, city : result2};
			res.render("layout", pageData);
		});

	});




});


routes.post("/", function(req, res){
	// console.log(req.body);

	student.addNew(req.body, function(err, result){
		console.log(result);
		res.redirect("/");
	});
});


module.exports=routes;