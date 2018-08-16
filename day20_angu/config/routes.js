var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/student"));
routes.use("/studentWebService", require("../controller/studentWebService"));
routes.use("/about", require("../controller/about"));
routes.use("/watch", require("../controller/watch"));


module.exports=routes;