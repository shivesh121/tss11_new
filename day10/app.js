var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));

var counter=0;

app.use(function(req, res, next){
	if(! req.session.check)
	{
		counter++;
		req.session.check=true;
	}
	console.log("PAGE COUNTING-------", counter);
	next();
});


app.use(require("./config/routes"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});
