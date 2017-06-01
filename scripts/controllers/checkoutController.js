foodApp.controller('checkoutCtrl',['$scope',function($scope){
	$scope.cartSummary = JSON.parse(localStorage.getItem("cart"));
	console.log($scope.cartSummary);
}]);