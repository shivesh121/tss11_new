var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";









app.set('view engine', 'ejs');



app.get("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		var db = client.db('tss11');
		db.collection('user').find().toArray(function(err, result){
			// console.log(result);
			res.render("show", { res : result});
		});	
	});
});




var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});
