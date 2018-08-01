var express = require('express');
var routes = express.Router();
var student = require("../models/student");
var city = require("../models/city");


routes.post("/upload", function(req, res){
	console.log(req.files);
	var a = req.body.name;
	var file = req.files.photo;
	var name = file.name;
	var arr = name.split(".");
	var ext = arr[arr.length-1];
	var new_name = a+"."+ext;


	file.mv("./public/photos/"+new_name, function(err){
		if(err){
			console.log("------", err);
			return;
		}
	});


});



routes.get("/", function(req, res){



	student.selectAll(function(err, result1){
		city.selectAll(function(err, result2){
			// console.log(result2);
			result1 = JSON.parse(JSON.stringify(result1));

			// result1.forEach(function(data){
			// 	result2 = JSON.parse(JSON.stringify(result2));
				
			// });
				result2 = JSON.parse(JSON.stringify(result2));
			



			var pageData = { title : "Student", pagename : "student/index", stu : result1, city : result2};
			res.render("layout", pageData);
		});

	});




});


routes.post("/", function(req, res){
	// console.log(req.body);

	student.addNew(req.body, function(err, result){
		res.redirect("/");
	});
});


routes.get("/delete/:id", function(req, res){
	// console.log(req.query);
	// console.log(req.params);
	var id = req.params.id;
	student.deleteWhere(id, function(err, result){
		res.redirect("/");
	});
});
routes.get("/edit/:id", function(req, res){
	var id = req.params.id;
	student.selectById(id, function(err, result1){
		city.selectAll(function(err, result2){
		result1=JSON.parse(JSON.stringify(result1));
		// console.log(result1);
		result2=JSON.parse(JSON.stringify(result2));
		var pageData = { title : "Student", pagename : "student/edit", stu : result1[0], city : result2};
		res.render("layout", pageData);
		});
	});
});

routes.post("/edit/:id", function(req, res){
	var id = req.params.id;
	student.updateById(id, req.body, function(err, result){
		res.redirect("/");
	});
});


routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});



module.exports=routes;




// hr@sharcinfotech.com