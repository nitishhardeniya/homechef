foodApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "showcase.html",
        controller : "foodCtrl"
    }).when("/home", {
        templateUrl : "home.html",
        controller : "homeCtrl"
    });
});