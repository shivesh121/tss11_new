var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));



server.listen(3000, function(){
	console.log("Server Running");
});





var arr={};
var currentUser={};

app.get("/", function(req, res){
	res.render("index");
});
app.post("/", function(req, res){
	// console.log(req.body);
	// arr.push(req.body.name);
	currentUser.name = req.body.name;
	req.session.user=currentUser.name;
	res.redirect("/user");


});

app.get("/user", function(req, res){
	res.render("user");

	io.on("connection", function(socket){
		// console.log(req.session);
			
			currentUser.id = socket.id;
			arr[currentUser.name]=currentUser.id;

			// console.log("comming-------", arr);

			socket.emit("currentUser", req.session.user);
			io.emit("onlineuser", arr);

			// socket.on("disconnect", function(){
			// 	console.log("disconnection", socket.id);
			// });

			socket.on("message", function(obj){
				console.log(obj);
				socket.broadcast.to(obj.recId).emit('message', obj);
			});
		});

	
});
