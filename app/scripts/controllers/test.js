 angular.module('transportApp')
  .controller('TestGridCtrl', function ($scope, uiGridConstants, ordersService) {

 $scope.gridOptions = {};
  $scope.gridOptions.enableCellEditOnFocus = true;
 $scope.gridOptions.data = ordersService.getOrders();


  $scope.gridOptions.columnDefs = [
    { name: 'CustomerId', displayName: 'Timmy D', enableCellEdit: true },
    { name: 'Customer', displayName: 'Haurn', enableCellEditOnFocus:false, displayName:'age (f2/dblClick edit)', width: 200  },
    { name: 'CustomerCityState', displayName: 'JOE', enableCellEdit: true, width: 300 },
    { name: 'BillTo', enableCellEdit: false, displayName: 'Name (editOnFocus)', width: 200}
  ];
 

    $scope.gridOptions.onRegisterApi = function(gridApi){
       $scope.gridApi = gridApi;
    };

});