var playApp = angular.module('playApp',[]);

playApp.controller('playCtrl',['$scope',function($scope){
    
    $scope.messageCtrl = "Im from conrtroller";
    $scope.name = 'Nitish Hardeniya';
    $scope.changeControllerVal = function(){
        alert(3)
      $scope.name = 'Name changed from Ctrl';  
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