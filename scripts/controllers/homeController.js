foodApp.controller('homeCtrl',['$scope','$state',function($scope,$state){

	$scope.showDishes = function(){
		console.log($scope.myLocation);
		$state.go('order');
	};

}]);