var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT * FROM user";
	con.query(que, cb);
}

module.exports.selectById=function(id, cb){
	var que = "SELECT * FROM user WHERE id="+id;
	con.query(que, cb);
}


module.exports.updateById=function(id, obj, cb){
	var que = "UPDATE user SET full_name='"+obj.full_name+"', age = '"+obj.age+"', city = '"+obj.city+"' WHERE id="+id;
	con.query(que, cb);
}



module.exports.addNew=function(obj, cb){
	// var que = "INSERT INTO user (";
	// for(var k in obj)
	// {
	// 	que += k+" ,";
	// }
	// que +=") VALUES (";
	// for(var k in obj)
	// {
	// 	que += "'"+obj.k+"' ,";

	// }
	// console.log(obj.state);
	var que = "INSERT INTO user (full_name, age, city) VALUES ('"+obj.full_name+"', '"+obj.age+"', '"+obj.city+"')";
	con.query(que, cb);
}

module.exports.deleteWhere=function(id, cb){
	var que = "DELETE FROM user WHERE id="+id;
	con.query(que, cb);
}