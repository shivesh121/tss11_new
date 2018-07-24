var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT * FROM user";
	con.query(que, cb);
}

module.exports.addNew=function(obj, cb){
	var que = "INSERT INTO user (";
	// for(var k in obj)
	// {
	// 	que += k+" ,";
	// }
	// que +=") VALUES (";
	// for(var k in obj)
	// {
	// 	que += "'"+obj.k+"' ,";

	// }
	// console.log()
	var que = "INSERT INTO user (full_name, age, city) VALUES ('"+obj.full_name+"', '"+obj.age+"', '"+obj.city+"')";
	con.query(que, cb);
}