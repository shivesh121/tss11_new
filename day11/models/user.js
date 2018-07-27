var con = require("../config/connect");

module.exports.selectByUsername=function(username, cb){
	// con.connect(function(err){
	// 	if(err){
	// 		console.log(err);
	// 		return;
	// 	}
		var que = "SELECT * FROM user WHERE username='"+username+"'";
		console.log(que);
		con.query(que, cb);
		// con.query(que, function(err, result){
		// 	console.log(result);
		// });
	// });
}