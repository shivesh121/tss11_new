var express = require('express');
var router = express.Router();


router.use("/", require("../controller/home"));
router.use("/about", require("../controller/about"));
router.use("/login", require("../controller/login"));
router.use("/signup", require("../controller/signup"));
router.use("*", require("../controller/notfound"));

module.exports=router;
