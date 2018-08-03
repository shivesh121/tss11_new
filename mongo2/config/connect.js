var mysql = require('mysql');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
module.exports.mysql=mysql.createConnection({
		host : "localhost",
		user : "admin",
		password : "admin",
		database : "tss11"

});
module.exports.mongo=function(cb){
	MongoClient.connect(url, cb);
}
