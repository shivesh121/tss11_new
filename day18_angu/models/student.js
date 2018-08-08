var con = require("../config/connect");

module.exports.selectAll=function(cb){
	var que = "SELECT * FROM student";
	con.query(que, cb);
}

module.exports.selectById=function(id, cb){
	var que = "SELECT * FROM student WHERE id="+id;
	con.query(que, cb);
}


module.exports.updateById=function(id, obj, cb){
	var que = "UPDATE student SET full_name='"+obj.full_name+"', age = '"+obj.age+"', city = '"+obj.city+"' WHERE id="+id;
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
	var que = "INSERT INTO student (full_name, age, city) VALUES ('"+obj.full_name+"', '"+obj.age+"', '"+obj.city+"')";
	con.query(que, cb);
}

module.exports.deleteWhere=function(id, cb){
	var que = "DELETE FROM student WHERE id="+id;
	con.query(que, cb);
}