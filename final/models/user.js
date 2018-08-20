var config = require("../config/config");
var con = require("../config/db");
var dbName = config.dbName;

module.exports.find=function(where, cb){
	con(function(err, client){
		var db = client.db(dbName);
		db.collection("user").find(where).toArray(cb);
	});
}

