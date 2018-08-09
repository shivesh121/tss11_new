var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT name FROM city";
	con.query(que, cb);
}