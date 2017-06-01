foodApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state({
            name:'home',
            url: '/home',
            templateUrl : "views/home.html",
        	controller : "homeCtrl"
        })
    .state({
            name:'order',
            url: '/order',
            templateUrl: 'views/showcase.html',
            controller:'foodCtrl',
            params:{
                location:null
            }
        })
    .state({
            name:'checkout',
            url:'/checkout',
            templateUrl:'views/checkout.html',
            controller:'checkoutCtrl'
    });
});