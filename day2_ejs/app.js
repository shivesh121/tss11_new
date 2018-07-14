var express = require('express');
var app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');


app.get("/", function(req, res){
	// res.sendFile()

	var data = ["Rohit", "James", "Deepa", "Nidhi", "Jaya", "Ritesh"];

	var pageData = { info : data };


	res.render('home', pageData);
});



app.listen(3000, function(){
	console.log("Running");
});