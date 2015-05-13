'use strict';

angular.module('transportApp')
  .controller('CustomerCtrl', function ($scope, $routeParams) {

    $scope.pageTitle = '';

    $scope.id = $routeParams.id;
  	$scope.showDetail = false;

  	if( $routeParams.id  ){
  		$scope.showDetail = true;
  	}

  	$scope.name = 'Some Customer Name';
  });
