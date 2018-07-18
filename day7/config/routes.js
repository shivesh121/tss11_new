var express = require('express');
var routes = express.Router();

routes.use("/", require("../controller/home"));
// routes.use("/about", require("../controller/about"));



module.exports=routes;