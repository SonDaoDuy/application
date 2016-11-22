var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/home', {
      templateUrl: 'home.html'
   }).

   when('/addStudent', {
      templateUrl: 'addStudent.htm',

   }).

   when('/viewStudents', {
      templateUrl: 'viewStudents.htm',

   }).

   otherwise({
      redirectTo: '/home'
   });
}]);