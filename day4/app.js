var express = require('express');
var app = express();
var bodyParser = require('body-parser');




app.set("view engine", "ejs");
app.use(bodyParser());

app.use(function(req, res, next){
	console.log("CALLING USE ------------");
	next();
});



app.get("/", function(req, res){
	var arr = ["red", "green", "blue"];
	var pageData = { title : "Home Page", pagename : "home", data : arr };
	res.render("layout", pageData);
});


app.get("/about", function(req, res){
	var pageData = { title : "About Page", pagename : "about" };
	res.render("layout", pageData);
});

app.post('/about', function(req, res){
	console.log(req.body);
});





app.get("/contact", function(req, res){
	var pageData = { title : "About Page", pagename : "contact" };
	res.render("layout", pageData);
});

app.get("/help", function(req, res){
	var pageData = { title : "About Page", pagename : "help" };
	res.render("layout", pageData);
});
app.listen(3000, function(){
	console.log("Server Running");
});