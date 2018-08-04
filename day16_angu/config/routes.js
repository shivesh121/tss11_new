var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/student"));
routes.use("/studentWebService", require("../controller/studentWebService"));


module.exports=routes;