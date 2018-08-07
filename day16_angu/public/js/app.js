var app = angular.module("myApp", ['ngSanitize']);


app.controller("myCtrl", function($scope, $http){
	$scope.newData={};



	$scope.getCity=function(){
		
		$http({
			url : "/studentWebService/cityWebService",
			method :"get"
		}).then(function(res){
			console.log(res.data);
			$scope.cities=res.data;
		});

	}
	$scope.msg="";

	
	


	$scope.arr=[];
	$http({
		url : "/studentWebService",
		method : "get"

	}).then(function(res){
		$scope.arr=res.data;

	});



	$scope.add=function(){
		// $scope.newData.city=$scope.newData.city.name;
		// console.log($scope.newData);
		if($scope.newData.id)
		{
			$http({
				url : "/studentWebService/edit/"+$scope.newData.id,
				method : "post",
				data : $scope.newData
			}).then(function(res){
				$scope.arr[$scope.index]=$scope.newData;
				$("#addModal").modal("hide");
				// $scope.msg="<b>"+$scope.newData.full_name+"</b>Data Update Successfuly ";

			});
		}
		else
		{
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

	$scope.beforeEdit=function(obj){
		$scope.getCity();
		// $scope.newData=obj;
		$scope.index = $scope.arr.indexOf(obj);
		console.log($scope.index);
		angular.copy(obj, $scope.newData);
	}
	


});