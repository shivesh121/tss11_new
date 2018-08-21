var config = require("../config/config");
var con = require("../config/db");
var dbName = config.dbName;

module.exports.find=function(where, cb){
	con(function(err, client){
		var db = client.db(dbName);
		db.collection("student").find(where).toArray(cb);
	});
}

module.exports.insert=function(obj, cb){
	con(function(err, client){
		var db = client.db(dbName);
		// db.collection("").insert({}, function(err, result))
		db.collection("student").insert(obj, cb);
	});
}

