var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
// app.set('views', 'views');




app.use(bodyParser());

app.use(require("./config/routes"));



app.listen(3000, function(){
	console.log("SErver Running");
});	