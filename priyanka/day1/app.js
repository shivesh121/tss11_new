var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	var pagedata = { title : "Home Page", pagename : "home"};
	res.render("layout", pagedata);
});
app.get("/about", function(req, res){
	var pagedata = { title : "About Page", pagename : "about"};
	res.render("layout", pagedata);
});

app.get("/contact", function(req, res){
	var pagedata = { title : "Contact Page", pagename : "contact"};
	res.render("layout", pagedata);
});
app.listen(3000, function(){
	console.log("SErver Running");
});