var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$http.get('xyz.json').success(function (data){
		$scope.xyzdata = data;
	});
});
