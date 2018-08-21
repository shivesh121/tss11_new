var express = require('express');
var routes = express.Router();
var city = require("../models/city");


routes.get("/ws", function(req, res){
	city.find({}, function(err, result){

		res.send(result);
	});
});






module.exports=routes;