var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.arr=[];
	$http({
		url : "/studentWebService",
		method : "get"

	}).then(function(res){
		console.log(res.data);
		$scope.arr=res.data;

	});
	
	// $scope.arr = [
	// 	{
	// 		full_name : "rohit",
	// 		age : 25,
	// 		city : "ujjain"

	// 	},
	// 	{
	// 		full_name : "james",
	// 		age : 25,
	// 		city : "ujjain"

	// 	},
	// 	{
	// 		full_name : "jaya",
	// 		age : 25,
	// 		city : "ujjain"

	// 	},
	// 	{
	// 		full_name : "gaurav",
	// 		age : 25,
	// 		city : "ujjain"

	// 	}
	// ]


});