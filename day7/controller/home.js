var express = require('express');
var routes = express.Router();

var user = require("../model/user");


routes.get("/", function(req, res){
	user.select(function(err, result){
		res.render("home", { a : "rohit", data : result });

	});
	




});

module.exports=routes;