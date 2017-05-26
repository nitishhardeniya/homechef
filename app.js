var playApp = angular.module('playApp',[]);

playApp.controller('playCtrl',['$scope',function($scope){
    
    $scope.messageCtrl = "Im from conrtroller";
    $scope.name = 'Nitish Hardeniya';
    $scope.photos = [{
        imgId:1,
        url:'https://www.skymetweather.com/themes/skymet/images/gallery/toplists/Top-Not-to-miss-food-items-in-Monsoon/5.jpg',
        title:'Momos'
    },{
        imgId:2,
        url:'https://s-media-cache-ak0.pinimg.com/736x/26/d6/ce/26d6ceba8b1e558a6cc0c8f4cee6cd4f.jpg',
        title:'Noodles'
    },{
        imgId:3,
        url:'http://img3.rnkr-static.com/list_img_v2/4776/2504776/full/new-fast-food-items-2017.jpg',
        title:'Falafel'
    },{
        imgId:4,
        url:'https://s-media-cache-ak0.pinimg.com/736x/26/d6/ce/26d6ceba8b1e558a6cc0c8f4cee6cd4f.jpg',
        title:'Noodles'
    },{
        imgId:5,
        url:'http://img3.rnkr-static.com/list_img_v2/4776/2504776/full/new-fast-food-items-2017.jpg',
        title:'Falafel'
    },{
        imgId:6,
        url:'https://s-media-cache-ak0.pinimg.com/736x/26/d6/ce/26d6ceba8b1e558a6cc0c8f4cee6cd4f.jpg',
        title:'Noodles'
    }];
    
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