// var mymod=require("./mymod");
// mymod.a();


var express = require('express');
var app = express();


app.get("/", function(req, res){
	// console.log(__dirname);
	res.sendFile(__dirname+"/home.html");
});

app.get("/about", function(req, res){
	// console.log(__dirname);
	res.sendFile(__dirname+"/about.html");
});



app.listen(3000, function(){
	console.log("SErver Running");
});