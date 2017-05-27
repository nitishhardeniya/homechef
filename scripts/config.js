foodApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "showcase.html",
        controller : "foodCtrl"
    });
});