foodApp.controller('homeCtrl',['$scope',function($scope){

	$scope.showDishes = function(){
		console.log($scope.myLocation);
		window.location.href('/');
	};

}]);