var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser());



server.listen(3000, function(){
	console.log("Server Running");
});



io.on("connection", function(socket){

	console.log("comming-------", socket.id);
	io.emit("onlineuser", arr);
	
	currentUser.id = socket.id;
	socket.emit("currentUser", currentUser);

	// socket.on("disconnect", function(){
	// 	console.log("disconnection", socket.id);
	// });

});

var arr=[];
var currentUser={};

app.get("/", function(req, res){
	res.render("index");
});
app.post("/", function(req, res){
	console.log(req.body);
	arr.push(req.body.name);
	currentUser.name = req.body.name;
	res.redirect("/user");
});

app.get("/user", function(req, res){
	res.render("user");
});