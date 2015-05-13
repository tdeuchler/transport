'use strict';

angular.module('transportApp')
  .directive('ngModal', function() {

  /*
  function link( scope, element, attributes ){
  	scope.$on('closeModal', function(){
  		scope.show = false;
  	});
  }
  */

  return {
  	//link:link,
    restrict: 'E',
    templateUrl: '/views/common/modal.html'
  	/*
    scope: {
    	template: '=',
    	show: '='
    }
    */

    
  };
});