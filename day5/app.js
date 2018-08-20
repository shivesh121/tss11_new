var express = require('express');
var app = express();


app.set('view engine', 'ejs');



















// app.set('veiws', 'views');

app.use(require('./config/routes'));


app.listen(3000, function(){
	console.log("Server Running");
});