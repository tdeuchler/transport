'use strict';

/**
 * @ngdoc overview
 * @name transportApp
 * @description
 * # transportApp
 *
 * Main module of the application.
 */
angular
  .module('transportApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.cellNav',
    'ngSanitize',
    'ngMockE2E'
   
  ]).config(function ($routeProvider, $httpProvider) {


    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html'
      })
        .when('/main', {
        templateUrl: 'views/main.html'
      })
      .when('/pro/:id', {
        templateUrl: 'views/pro.html'
      })
      .when('/pro', {
        templateUrl: 'views/pro.html'
      })
      .when('/customer', {
        templateUrl: 'views/customer.html'
      })
      
            .when('/customer/:id', {
        templateUrl: 'views/customer.html'
      })

      .when('/select', {
        templateUrl: 'views/select.html'
      })
      .when('/date', {
        templateUrl: 'views/date-picker.html'
      })
      .when('/grid', {
        templateUrl: 'views/common/grid.html'
      })
      .otherwise({
        redirectTo: '/pro'
      });


      $httpProvider.interceptors.push('APIInterceptor');
  }).run(function($httpBackend) {

  
  //$httpBackend.whenPOST('/authenticate').respond(401, {code:'success', id:'234dccsT'});

  $httpBackend.whenPOST('http://authentication.com/auth').respond( function(method,url,data){
    data = JSON.parse(data);
     
      if( data.user == 'user' && data.password == 'password' ){
          return [200, {access_token:'234fkf'}, {}];
      }else{
        return [401, {}, {}];
      }

      
  });

 

  $httpBackend.whenGET(/^views\//).passThrough();
  $httpBackend.whenGET(/^\/views\//).passThrough();


});
