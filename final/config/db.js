var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

module.exports=function(cb){
	MongoClient.connect(url, cb);
}

/*
MongoClient.connect(url, function(err, client){
	var db = client.db("tss11_node");
	db.collection("user").find().toArray(function(err, result){

	});
});
*/