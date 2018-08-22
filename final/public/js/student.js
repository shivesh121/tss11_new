var stu = angular.module("stuApp", []);
stu.filter("myloop", function(){
	return function(arr, total){
		for(var i=1; i<=total; i++)
		{
			arr.push(i);
		}
		return arr;
	}
});

stu.controller("stuCtrl", function($scope, $http, $location){
	$scope.cities=[];
	$scope.states=[];
	$scope.student={};
	$scope.allStu = [];
	$scope.pagination={ skip : 0, limit : 5};

	var skip = ($location.search().skip);
	var limit = ($location.search().limit);
	console.log($location.absUrl(), skip, limit);
	if(skip!=undefined){
		// console.log("000000", skip);
		$scope.pagination.skip=parseInt(skip);
	}
	if(limit!=undefined){
		$scope.pagination.limit=parseInt(limit);
	}
	$scope.call=function(x){
		alert(x);
	}
	console.log("-------", $scope.pagination);

	$scope.getAll=function(){
		var url = "/getAll?skip="+$scope.pagination.skip+"&limit="+$scope.pagination.limit;
		$http({
			url : "/student/getAll?skip="+$scope.pagination.skip+"&limit="+$scope.pagination.limit,
			method : "get",
			data : $scope.pagination
		}).then(function(res){
			$scope.allStu = res.data.result;
			$scope.total = res.data.total;
			$scope.pages = Math.ceil($scope.total/$scope.pagination.limit);
			console.log($scope.pages);
			$location.url(url)

		});
	}
	$scope.pagecall=function(x){
		$scope.pagination.skip = (x*$scope.pagination.limit)-$scope.pagination.limit;
		$scope.getAll();

	}


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