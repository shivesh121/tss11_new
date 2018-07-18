var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	var pageData = { title : "Not Found", pagename : "notfound/index"};
	res.render("layout", pageData);
});




module.exports=router;