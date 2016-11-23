var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/', {
      templateUrl: '/templates/home.html'
   }).

   when('/account', {
      templateUrl: '/templates/account.html'

   }).

   when('/checkout', {
      templateUrl: '/templates/checkout.html'

   }).

   when('/contact' , {
      templateUrl: '/templates/contact.html'
   }).

   when('/login' , {
      templateUrl: '/templates/login.html'
   }).

   when('/products' , {
      templateUrl: '/templates/products.html'
   }).

   when('/single' , {
      templateUrl: '/templates/single.html'
   }).

   otherwise({
      redirectTo: '/'
   });
}]);