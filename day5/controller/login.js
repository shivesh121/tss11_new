var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
	var pageData = { title : "Login Page", pagename : "login/index"};
	res.render("layout", pageData);
});




module.exports=router;
