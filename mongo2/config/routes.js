var express = require('express');
var routes = express.Router();


// routes.use("/", require("../controller/login"));
routes.use("/", require("../controller/student"));
// routes.use("/product", require("../controller/product"));
// routes.use("/cart", require("../controller/cart"));









module.exports=routes;