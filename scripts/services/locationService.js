foodApp.service('locationService',function($http){
	return {
		getLocation : function(searchstr){
			var apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+searchstr+'&radius=5000&key=AIzaSyDSrG9xhU-fTc5lNNtIWY3UEcQzXDiMEwo';
			return $http({
                  method: "GET",
                  url   : apiUrl
                 });
		}
	}
});