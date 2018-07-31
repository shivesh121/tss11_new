var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var cache = require('nocache');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS", saveUninitialized: true}));
app.use(flash());
app.use(cache());

app.use(function(req, res, next){
	res.locals.session = req.session;
	next();
});



app.use(require("./config/routes"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});
