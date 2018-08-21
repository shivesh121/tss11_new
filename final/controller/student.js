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
	
	student.find({}, function(err, result){
		res.send(result);
	});
});






module.exports=routes;