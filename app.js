var playApp = angular.module('playApp',[]);

playApp.controller('playCtrl',['$scope',function($scope){
    
    $scope.messageCtrl = "Im from conrtroller";
    $scope.name = 'Nitish Hardeniya';
    $scope.items = [{
        imgId:1,
        url:'https://www.skymetweather.com/themes/skymet/images/gallery/toplists/Top-Not-to-miss-food-items-in-Monsoon/5.jpg',
        title:'Momos'
    },{
        imgId:2,
        url:'http://www.indobase.com/recipes/rec-images/aloo-paratha.jpg',
        title:'Aloo paratha'
    },{
        imgId:3,
        url:'http://img3.rnkr-static.com/list_img_v2/4776/2504776/full/new-fast-food-items-2017.jpg',
        title:'Falafel'
    },{
        imgId:4,
        url:'http://st1.thehealthsite.com/wp-content/uploads/2016/02/diet-high-calorie-count-of-indian-veg-food-chhole-bhature-THS.jpg',
        title:'Chole bhature'
    },{
        imgId:5,
        url:'http://www.manjulaskitchen.com/blog/wp-content/uploads/everyday-lunch-menu.jpg',
        title:'Kadi pakoda'
    },{
        imgId:6,
        url:'http://www.onegreenplanet.org/wp-content/uploads/2010/10/2015/05/channa-1200x800.jpg',
        title:'Chole chawal'
    },{
        imgId:7,
        url:'http://foodpunch.com/wp-content/uploads/2013/07/Vegetable-Pulav-0.jpg',
        title:'Vegetable pulav'
    }];

    $scope.basket = [];
    $scope.addToBasket = function(item){
        $scope.basket.push(item);
    };
    
}]);


playApp.directive('playHandler',function(){
    return {
        restrict:'EA',
        templateUrl:'directive1.html',
        scope:{
            name:'=',
            age:'='
        },
        link:function($scope,element,attrs){
            console.log(element)  
            element.bind('click',function(){
                $scope.name= 'Name changed from directive';
                $scope.age = 23;
            });
        }
    };
});