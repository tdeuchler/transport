'use strict';

angular.module('transportApp')
  .directive('ngSpinner', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/common/spinner.html'
  }
});