var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	var pageData = { title : "About Page", pagename : "about/index"};
	res.render("layout", pageData);
});

router.get("/show", function(req, res){
	var pageData = { title : "Show Page", pagename : "about/show"};
	res.render("layout", pageData);
});


module.exports=router;