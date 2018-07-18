var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "admin",
	password : "admin",
	database : "tss4"
});



app.get("/", function(req, res){

	con.connect(function(err){
		con.query("SELECT * FROM company", function(err, result){
			result = JSON.parse(JSON.stringify(result));
			console.log(result);
			var pageData = { title : "My Sql Data", pagename : "home/mysql_data", result : result };
			res.render("layout", pageData);
		});
	});


});






app.set('view engine', 'ejs');
// app.set('veiws', 'views');

// app.use(require('./config/routes'));


app.listen(3000, function(){
	console.log("Server Running");
});