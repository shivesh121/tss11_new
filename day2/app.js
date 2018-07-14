var express = require('express');
var app = express();


app.get("/", function(req, res){

	console.log(__dirname);
	res.sendFile(__dirname+"/home.html");
});

app.get("/about", function(req, res){
	res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){
	res.sendFile(__dirname+"/contact.html");
});
app.get("/login", function(req, res){
	res.sendFile(__dirname+"/login.html");
});
app.get("/signup", function(req, res){
	res.sendFile(__dirname+"/signup.html");
});



var port = process.env.PORT | 3000;
app.listen(port, function(){
	console.log("Server Running with running ", port);
});
