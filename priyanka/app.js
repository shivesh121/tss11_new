// var x = require("./demo");
// var y = x();
// console.log(y);

var express = require('express');
var app = express();



app.set('view engine', 'ejs'); // setting a view engine to application
// app.set('views', 'pages');




app.get("/", function(req, res){
	res.render("home");
});




app.get("/about", function(req, res){
	// console.log("About Calling");
	// res.send("<h1>hello world</h1>");
	// res.sendFile(__dirname+"/about.html");
	res.render("about");
	// res.render();
});





app.listen(3000, function(){ 
	console.log("Server Running"); 
}); // Create a Server in port 3000