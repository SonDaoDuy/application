'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

var app = angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })

        .when('/dashboard', {
            controller: 'LoginController',
            templateUrl: 'modules/dashboard/views/dashboard.html',
            hideMenus: true
        })

        .when('/profile', {
            controller: 'LoginController',
            templateUrl: 'modules/profile/views/profile.html',
            hideMenus: true
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/account', {         
            controller: 'LoginController',   
            templateUrl: 'modules/account/views/account.html',
            hideMenus:true
        })

        .when('/contact', {            
            templateUrl: 'modules/contact/views/contact.html'
        })

        .when('/checkout', {            
            templateUrl: 'modules/checkout/views/checkout.html'
        })

        .when('/products', {            
            templateUrl: 'modules/products/views/products.html'
        })

        .when('/single_product', {            
            templateUrl: 'modules/single_product/views/single_product.html'
        })

        .otherwise({ redirectTo: '/' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in
        //     if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        //         $location.path('/login');
        //     }
        // });
    }]);


app.controller("app_controller", function($scope,$rootScope,AuthenticationService){
    $scope.var_user = {isLogin:false,notLogin: true};
    console.log($scope.var_user);
    if ($rootScope.globals.currentUser){
        $scope.var_user.isLogin = true;
        $scope.var_user.notLogin = false;       
        $scope.username = $rootScope.globals.currentUser["username"];
    }
    else{
        $scope.var_user.isLogin = false;
        $scope.var_user.notLogin = true;
        
    }

    $scope.logout = function(){
        $scope.var_user.isLogin = false;
        $scope.var_user.notLogin = true;
        AuthenticationService.ClearCredentials();
    }
});

