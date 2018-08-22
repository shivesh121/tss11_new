var config = require("../config/config");
var con = require("../config/db");
var dbName = config.dbName;

module.exports.find=function(where,s=0, l=10,cb){
	con(function(err, client){
		var db = client.db(dbName);
		db.collection("student").find(where).skip(s).limit(l).toArray(cb);
	});
}
module.exports.findAllCount=function(cb){
	con(function(err, client){
		var db = client.db(dbName);
		db.collection("student").count(cb);
	});
}

// db.collection().find().skip().limit()

module.exports.insert=function(obj, cb){
	con(function(err, client){
		var db = client.db(dbName);
		// db.collection("").insert({}, function(err, result))
		db.collection("student").insert(obj, cb);
	});
}

