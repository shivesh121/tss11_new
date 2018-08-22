var express = require('express');
var routes = express.Router();
var student = require("../models/student");


routes.get("/", function(req, res){
	var pageData = { title : "Login", pagename : "login/index", appName : "stuApp", ctrlName : "stuCtrl"};
	res.render("student", pageData);
});
routes.post("/add", function(req, res){
	
	student.insert(req.body, function(err, result){
		console.log(result);
		res.send(result.ops[0]);
	});
});
routes.get("/getAll", function(req, res){
	var s = parseInt(req.query.skip);
	var l = parseInt(req.query.limit);
	console.log(req.query);
	student.findAllCount(function(err, result1){
		student.find({}, s, l, function(err, result2){
			var sendObj = {total : result1, result : result2};			
			res.send(sendObj);
		});

	});

});






module.exports=routes;