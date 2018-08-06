var app = angular.module("myApp", ['ngSanitize']);
app.controller("myCtrl", function($scope, $http){

	$scope.getCity=function(){
		$scope.newData={};
		$http({
			url : "/studentWebService/cityWebService",
			method :"get"
		}).then(function(res){
			console.log(res.data);
			$scope.cities=res.data;
		});

	}



	$scope.msg="";
	$scope.newData={};
	$scope.arr=[];
	$http({
		url : "/studentWebService",
		method : "get"

	}).then(function(res){
		$scope.arr=res.data;

	});
	$scope.add=function(){
		// console.log($scope.newData);
		$http({
			url : "/studentWebService",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			console.log(res.data);
			$scope.arr.push(res.data);
			$scope.msg="<b>"+res.data.full_name+"</b>Data Add Successfuly ";
		});
	}

	$scope.askDelete=function(obj){
		$scope.selectedObj=obj;
	}
	$scope.delete=function(){

		$http({
			method : "get",
			url : "/studentWebService/delete/"+$scope.selectedObj.id
		}).then(function(res){
			// console.log(res.data);
			var i = $scope.arr.indexOf($scope.selectedObj);
			$scope.arr.splice(i, 1);
		});
	}
	


});