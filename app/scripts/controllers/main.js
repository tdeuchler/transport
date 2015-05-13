'use strict';


angular.module('transportApp')
  .controller('MainCtrl', function ($scope, $timeout, $location, $cookieStore, userService) {

    //security for now
    var user = userService.getCurrentUser();
    if( !user || user.access_token === null ){
      
      $location.path('/');
    }

  	var animate = $cookieStore.get('no-animate');
  	$scope.show = false;

	   if( !animate ){
	    	$scope.show = true;
	    	$cookieStore.put('no-animate', true);
	    }
	  

    $scope.navigate = function( path ){
    	$location.path( path );
    }
  });
