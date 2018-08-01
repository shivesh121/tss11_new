var express = require('express');
var routes = express.Router();
var product = require("../models/product");

routes.get("/", function(req, res){
		console.log(req.cookies);
			product.selectAll(function(err, result){
				console.log(result);
			var pageData = { title : "Student", pagename : "product/index", pro : result};
			res.render("layout", pageData);
			});
		});


module.exports=routes;
