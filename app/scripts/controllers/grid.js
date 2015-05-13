  'use strict';


angular.module('transportApp')
  .controller('GridCtrl', function ($scope, $location, uiGridConstants, ordersService) {
   $scope.gridOptions = {};
    $scope.gridOptions.data = ordersService.getOrders();
    $scope.gridOptions.enableColumnResizing = true;
   // $scope.gridOptions.enableFiltering = true;
    $scope.gridOptions.enableCellEditOnFocus = true;

  /*
        rowTemplate: '<div style="cursor:pointer;" ng-click="grid.appScope.getRow(row.entity.CustomerId)" ng-class="{ \'my-css-class\': grid.appScope.rowFormatter( row ) }">' +
                 '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                 '</div>',
*/
    $scope.gridOptions.columnDefs = [

        {field:'CustomerId',
        displayName: 'Id',
          filter: {
            type: uiGridConstants.filter.SELECT
          },
          enableCellEdit: false
        },
        {field:'Customer',
          filter: {
            type: uiGridConstants.filter.SELECT
          },
          enableCellEdit: true
        },
        {field:'CustomerCityState',
        displayName: 'City, State',
          filter: {
            type: uiGridConstants.filter.SELECT
          },
          enableCellEdit: true
        },

        {field:'BillTo',
        displayName: 'Billing',
          filter: {
            type: uiGridConstants.filter.SELECT
          },
          enableCellEdit: false
        },
      ];

 



/*
     "CustomerId": "5317ce3b859d26944b8b459e",
            "Customer": "MOHAWK CUSTOMS & SHIPPING CORP",
            "CustomerCityState": "ITASCA, IL",
            "BillToId": "5317ce3b859d26944b8b459e",
            "BillTo": "MOHAWK CUSTOMS & SHIPPING CORP",
*/

 $scope.gridOptions.onRegisterApi = function(gridApi){
       $scope.gridApi = gridApi;
    };

    $scope.getRow = function(row){

        $location.path('/report/' + row);

    };

  });



 