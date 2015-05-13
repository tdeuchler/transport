'use strict';

angular.module('transportApp')
  .controller('LoginCtrl', function ($scope, $location, $rootScope, $cookieStore, loginService, userService) {

  	$scope.userName = '';
  	$scope.password = '';

  	$scope.authenticate = function(){

  		var user = {user:$scope.userName, password:$scope.password};

  		 loginService.login(user).then(function(data){

  		 	 data.access_token ? user.access_token = data.access_token : user.access_token = null;

        userService.setCurrentUser(user);
        $cookieStore.remove('no-animate');
        $location.path('/main');

  		 },
  		 	function(error){
  		 		console.log(error);
  		 	});
         
                
          
  	};





  });
