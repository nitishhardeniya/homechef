foodApp.controller('homeCtrl',['$scope','$state','locationService',function($scope,$state,locationService){

	$scope.showDishes = function(){
		console.log($scope.myLocation);
		$state.go('order',{location:$scope.myLocation});
	};

	$scope.getLocationAddress = function(searchstr){
		if(searchstr.length > 3){
			locationService.getLocation(searchstr).then(function(response){
				//console.log(response.data.predictions);
				$scope.addresses = response.data.predictions;
			});	
		}
	}

	$scope.selectLocation = function(location){
		$scope.myLocation = location.description;
	}

}]);