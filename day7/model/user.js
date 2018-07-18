var con = require('../config/db');

module.exports.select = function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM user", cb);
		// con.query("SELECT * FROM user", fucntion(err, result){
			
		// });
	});

}


module.exports.selectById = function(){
	con.connect(function(err){
		con.query("SELECT * FROM user WHERE id = 2", function(err, result){
			console.log(result);
		});
	});

}