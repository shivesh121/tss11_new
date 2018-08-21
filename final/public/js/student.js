var stu = angular.module("stuApp", []);
stu.controller("stuCtrl", function($scope, $http){
	$scope.cities=[];
	$scope.states=[];
	$scope.student={};
	$scope.allStu = [];

	$http({
		url : "/student/getAll",
		method : "get"
	}).then(function(res){
		$scope.allStu = res.data;
	});



	$http({
		url : "/city/ws",
		method : "get"
	}).then(function(res){
		$scope.cities=res.data
	});
	$http({
		url : "/state/ws",
		method : "get"
	}).then(function(res){
		$scope.states=res.data
	});
	$scope.add=function(){
		$http({
			url : "/student/add",
			method : "post",
			data : $scope.student
		}).then(function(res){
			$scope.allStu.push(res.data);
		});
	}

});