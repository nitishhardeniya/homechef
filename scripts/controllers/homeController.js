foodApp.controller('homeCtrl',['$scope','$state','locationService',function($scope,$state,locationService){

	$scope.showDishes = function(){
		console.log($scope.myLocation);
		$state.go('order');
	};

	$scope.getLocationAddress = function(searchstr){
		if(searchstr.length > 3){
			locationService.getLocation(searchstr).then(function(response){
				console.log(response.data.results);
				$scope.addresses = response.data.results;
			});	
		}
	}

}]);