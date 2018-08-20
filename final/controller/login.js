var express = require('express');
var routes = express.Router();
var user = require("../models/user");


routes.post("/", function(req, res){
	console.log("----------", req.body);
	user.find(req.body, function(err, result){
		console.log(result);
		if(result.length>=1)
		{
			req.session.uid = result[0]._id;
			req.session.full_name = result[0].full_name;
			req.session.is_user_logged_in = true;
			res.send(true);

		}
		else
		{
			res.send(false);

		}
	});
});
module.exports=routes;
