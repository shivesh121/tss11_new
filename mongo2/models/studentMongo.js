var connect = require("../config/connect");
var dbName = "tss11_node";

module.exports.find=function(obj, cb){
	connect.mongo(function(err, client){
		var db = client.db(dbName);
		db.collection("student").find(obj).toArray(cb);
	});
}
module.exports.insert=function(obj, cb){
	connect.mongo(function(err, client){
		var db = client.db(dbName);
		db.collection("student").insert(obj, cb);
	});
}
module.exports.remove=function(obj, cb){
	connect.mongo(function(err, client){
		var db = client.db(dbName);
		db.collection("student").insert(obj, cb);
	});
}
