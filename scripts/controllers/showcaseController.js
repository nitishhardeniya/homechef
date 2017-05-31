foodApp.controller('foodCtrl',['$scope','$aside',function($scope,$aside){
    
    $scope.items = [{
        imgId:1,
        url:'https://www.skymetweather.com/themes/skymet/images/gallery/toplists/Top-Not-to-miss-food-items-in-Monsoon/5.jpg',
        title:'Momos',
        price:120
    },{
        imgId:2,
        url:'http://www.indobase.com/recipes/rec-images/aloo-paratha.jpg',
        title:'Aloo paratha',
        price:80
    },{
        imgId:3,
        url:'http://img3.rnkr-static.com/list_img_v2/4776/2504776/full/new-fast-food-items-2017.jpg',
        title:'Falafel',
        price:160
    },{
        imgId:4,
        url:'http://st1.thehealthsite.com/wp-content/uploads/2016/02/diet-high-calorie-count-of-indian-veg-food-chhole-bhature-THS.jpg',
        title:'Chole bhature',
        price:100
    },{
        imgId:5,
        url:'http://www.manjulaskitchen.com/blog/wp-content/uploads/everyday-lunch-menu.jpg',
        title:'Kadi pakoda',
        price:140
    },{
        imgId:6,
        url:'http://www.onegreenplanet.org/wp-content/uploads/2010/10/2015/05/channa-1200x800.jpg',
        title:'Chole chawal',
        price:140
    },{
        imgId:7,
        url:'http://foodpunch.com/wp-content/uploads/2013/07/Vegetable-Pulav-0.jpg',
        title:'Vegetable pulav',
        price:100
    }];

    $scope.basket = [];
    $scope.addToBasket = function(item){
        $scope.basket.push(item);
    };
    
    $scope.showCartSummary = function(){
        var asideScope = $scope.$new();
        var asideInstance = $aside.open({
          templateUrl: 'views/modals/cart-summary.html',
          placement: 'right',
          scope:asideScope,
          size: 'sm'
        });
        asideScope.proceedToCheckout = function(){
            asideInstance.close();
        };
    };

    

}]);