var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/home"));
routes.use("/login", require("../controller/login")); // localohst:3000/login/user
routes.use("/user", backdoor, require("../controller/student"));
// routes.use("/product", require("../controller/product"));
// routes.use("/cart", require("../controller/cart"));





function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/");
		return;
	}
	next();
}



module.exports=routes;