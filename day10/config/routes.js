var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/student"));


module.exports=routes;