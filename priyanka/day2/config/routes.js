var express = require('express');
var routes = express.Router;


routes.get("/", function(req, res){
	var pagedata = { title : "Home Page", pagename : "home"};
	res.render("layout", pagedata);
});
routes.get("/about", function(req, res){
	var pagedata = { title : "About Page", pagename : "about"};
	res.render("layout", pagedata);
});

routes.get("/contact", function(req, res){
	var pagedata = { title : "Contact Page", pagename : "contact"};
	res.render("layout", pagedata);
});


routes.get("/login", function(req, res){
	var pagedata = { title : "Login Page", pagename : "login"};
	res.render("layout", pagedata);
});

routes.post("/login", function(req, res){
	console.log("data comming");
	console.log(req.body);
});


module.exports=routes;
