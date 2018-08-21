var express = require('express');
var routes = express.Router();
var state = require("../models/state");


routes.get("/ws", function(req, res){
	state.find({}, function(err, result){

		res.send(result);
	});
});






module.exports=routes;