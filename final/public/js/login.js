var login = angular.module("loginApp", []);
login.controller("loginCtrl", function($scope, $http, $timeout, $window){
	$scope.loginObj = { username : "james", password : "11"};

	$scope.msg="";
	$scope.msgShow=false;
	$scope.preShow=false;
	$scope.login=function(){
		$scope.preShow=true;
		console.log($scope.loginObj);
		$http({
			url : "/login",
			method : "post",
			data : $scope.loginObj
		}).then(function(res){
			console.log(res);
			if(res.data)
			{
				$window.location.href="/student";
			}
			else
			{
				$scope.preShow=false;
				$scope.msg="usernamd password not matched";
				$scope.msgShow=true;
			}
		});
	}
});