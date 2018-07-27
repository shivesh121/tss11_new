var express = require('express');
var routes = express.Router();
var student = require("../models/student");
var city = require("../models/city");
var user = require("../models/user");



routes.get("/", function(req, res){
	var pageData = { title : "Login", pagename : "login/index", msg : req.flash('msg')};
	res.render("layout", pageData);
});

routes.post("/", function(req, res){
	var u = req.body.username;
	var p = req.body.password;
	user.selectByUsername(u, function(err, result){
		// console.log(result);
		if(result.length==0)
		{
			req.flash("msg", "This Username and Password is Incorrect");
			res.redirect("/");
		}
		else
		{
			result=JSON.parse(JSON.stringify(result));
			if(result[0].password == p)
			{
				req.session.uid = result[0].id;
				req.session.username = result[0].username;
				req.session.is_user_logged_in = true;
				res.redirect("/user");
			}
			else
			{
				req.flash("msg", "This Password is Incorrect");
				res.redirect("/");		
			}
		}
	});
});





module.exports=routes;