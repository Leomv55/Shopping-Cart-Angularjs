var app=angular.module('aloha',["ngRoute"]);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl:"../../pages/home.htm",
        controller:"ProductController"
    })
    .when('/cart',{
        templateUrl: "../../pages/cart.htm",
        controller:"CartController"
    })
    .otherwise('/');
}
]);

app.controller('ProductController',['$scope',"$rootScope",function($scope,$rootScope){
    $rootScope.cart=[];
    $rootScope.total=0;
    $scope.products=[
        {
        "image":"public/images/iphone.jpg",
        "name":"IPhone 10x",
        "price":73999.00
        },
        {
        "image":"public/images/samsung.jpg",
        "name":"Samsung mA",
        "price":54000.00
        },
        {
        "image":"public/images/nokia21.jpg",
        "name":"Nokia 21",
        "price":43000.00
        }
    ];
    $scope.addToCart=function(product){
        $rootScope.total+=product.price;
        $rootScope.cart.push(product);
        console.log(cartList);
    };
}]);
app.controller('CartController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.delCartItem=function(index) {
      $rootScope.total-=$scope.cart[index].price;
      $rootScope.cart.splice(index,1);
    };
}]);

