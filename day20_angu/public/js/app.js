/*
Filters in Angular

1. lowercase
2. uppercase
3. date
4. number
5. json
6. orderBy
7. filter
8. currency

*/


var app = angular.module("myApp", ['ngSanitize']);


app.directive("myDir", function(){
	return {
		// template : "<h1>HELLO</h1>",
		templateUrl : "/demo.html",
		restrict : "C"
	}
});// localhost:3000/#!red


app.filter("bonus", function(){

	return function(fee, age){
		if(age<25){
			var dis = fee*10/100;
			// dis = fee-dis;
		}
		if(age>=25){
			var dis = fee*20/100;
			// dis = fee-dis;

		}
		return dis;
	}

});


app.service("myServ", function($http, $rootScope){
	this.a=function(){
		$http({
			url : "/studentWebService/cityWebService",
			method :"get"
		}).then(function(res){
			console.log(res.data);
			$rootScope.cities = res.data;
			
		});
	}
});

app.controller("myCtrl", function(myServ, $scope, $http, $interval, $timeout){
	
	
	myServ.a();




	$scope.newData={};
	$scope.pagename = '/student';

	$scope.pageCall=function(page){
		
		$scope.pagename = page;
	}

	// $scope.getCity=function(){
		
	// 	$http({
	// 		url : "/studentWebService/cityWebService",
	// 		method :"get"
	// 	}).then(function(res){
	// 		console.log(res.data);
	// 		$scope.cities=res.data;
	// 	});

	// }
	$scope.msg="";

	
	


	$scope.arr=[];
	$scope.getAll=function(){
		// $interval(function(){
		// 	$http({
		// 			url : "/studentWebService",
		// 			method : "get"

		// 		}).then(function(res){
		// 			$scope.arr=res.data;
		// 			console.log('comming');

		// 		});
		// }, 1000);
		$timeout(function(){
			$http({
					url : "/studentWebService",
					method : "get"

				}).then(function(res){
					$scope.arr=res.data;
					console.log('comming');
					$scope.getAll();

				});
		}, 500);
	}
	/*
	$http({
		url : "/studentWebService",
		method : "get"

	}).then(function(res){
		$scope.arr=res.data;

	}); */


// $http.defaults.headers.post['Content-Type']="application/x-www-form-urlencoded; charset=utf-8";
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
		myServ.a();
		// $scope.getCity();
		// $scope.newData=obj;
		$scope.index = $scope.arr.indexOf(obj);
		console.log($scope.index);
		angular.copy(obj, $scope.newData);
	}
	


});