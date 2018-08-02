var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT * FROM product";
	con.connect(function(err){
		con.query(que, cb);

	});
}

module.exports.selectById=function(id, cb){
	var que = "SELECT * FROM product WHERE id="+id;
	con.connect(function(err){
		con.query(que, cb);

	});
}

module.exports.selectWhere=function(where, cb){
	var que = "SELECT * FROM product WHERE "+where;
	console.log(que);
	con.connect(function(err){
		con.query(que, cb);

	});
}
