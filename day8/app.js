var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser());

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});

