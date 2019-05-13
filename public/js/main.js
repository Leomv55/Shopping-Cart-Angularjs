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
var cartList=[{
    "image":"public/images/nokia21.jpg",
    "name":"Nokia 21",
    "price":43000.00
    },
    {
        "image":"public/images/samsung.jpg",
        "name":"Samsung mA",
        "price":54000.00
        }
];

app.controller('ProductController',['$scope',function($scope){
    debugger;
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
        cartList.push(product);
        console.log(cartList);
    };
}]);
app.controller('CartController',['$scope',function($scope){
    $scope.cart=cartList;
}]);

