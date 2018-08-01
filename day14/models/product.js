var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT * FROM product";
	con.connect(function(err){
		con.query(que, cb);

	});
}
