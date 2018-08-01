var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var cache = require('nocache');
var app = express();
var upload = require("express-fileupload");



app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());
app.use(cache());
app.use(upload());

app.use(function(req, res, next){
	res.locals.session = req.session;
	next();
});
/* ---------- PFD Converter CODE  -----------*/
// var fs = require('fs');
// var pdf = require('html-pdf');
// var html = "<h2>JAMES</h2>";
// var options = { format: 'Letter' };
 
// pdf.create(html, options).toFile('./demo1.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });
/* ---------- PFD Converter CODE  -----------*/




app.use(require("./config/routes"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});
