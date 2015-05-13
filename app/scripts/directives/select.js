'use strict';

angular.module('transportApp')
  .directive('ngSelect', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/common/select.html',

    scope:{
    	options: '='
    },

    controller: function($scope){

    	$scope.showOptions = false;
	    $scope.selectedValue = '';

	    if( $scope.options ){
		    $scope.options.forEach( function(option){
		    	option.default ? $scope.selectedValue = option.value : '';
		    });
		}

	    $scope.selectValue = function(value){

	    	$scope.selectedValue = value;
	    	$scope.showOptions = false;

		    $scope.options.forEach( function(option){
		    	option.default = false;
		    	$scope.selectedValue == option.value ? option.default = true : '';
		    });

	    	console.log( $scope.options );
	    }
    }
  }
});