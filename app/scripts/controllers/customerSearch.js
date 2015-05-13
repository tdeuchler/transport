  'use strict';


angular.module('transportApp')
  .controller('CustomerSearchCtrl', function ($scope, $location, $routeParams, uiGridConstants, ordersService, customerService, userService) {
    
    //security for now
    var user = userService.getCurrentUser();
    if( !user || user.access_token === null ){
      $location.path('/');
    }
    
    $scope.show = false;
    $scope.template = 'views/customer/customer-detail.html';
    $scope.gridOptions = {};
    $scope.gridOptions.data = ordersService.getOrders();
    $scope.gridOptions.enableColumnResizing = true;
    $scope.gridOptions.enableFiltering = true;
    $scope.searchString = '';


    //drop down options
    $scope.options = [{value:'Id', default:false},{value:'Customer', default:true},{value:'City', default:false},
    {value:'Billing', default:false}];

    $scope.gridOptions.rowTemplate = '<div class="customer-search-grid-row" ng-class="{ \'my-css-class\': grid.appScope.rowFormatter( row ) }">' +
                 '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ng-click="grid.appScope.getCustomer(row.entity.CustomerId)" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                 '</div>';

    $scope.gridOptions.columnDefs = [

        {field:'CustomerId',
        displayName: 'Id',
          filter: {
            type: uiGridConstants.filter.SELECT
          }
        },
        {field:'Customer',
          filter: {
            type: uiGridConstants.filter.SELECT
          }
        },
        {field:'CustomerCityState',
        displayName: 'City, State',
          filter: {
            type: uiGridConstants.filter.SELECT
          }
        },

        {field:'BillTo',
        displayName: 'Billing',
          filter: {
            type: uiGridConstants.filter.SELECT
          }
        },
      ];

      $scope.customer = {};

      $scope.search = function(){

        var column;
        $scope.options.forEach( function(option){
            option.default ? column = option.value : '';
        });

        var params = {column:column, searchString:$scope.searchString};
        if($scope.searchString != ''){
          $scope.gridOptions.data = ordersService.getOrder(params );
        }else{
           $scope.gridOptions.data = ordersService.getOrders();
        }
      }

  $scope.gridOptions.onRegisterApi = function(gridApi){
       $scope.gridApi = gridApi;
    };

    $scope.getCustomer = function(row){
      $scope.show = true;

      $scope.customer = customerService.getCustomer(row);
        //$location.path('/customer/' + row);

    };

    $scope.closeModal = function(){
     $scope.show = false;
    }

     if( $routeParams.id ){
     $scope.getCustomer($routeParams.id);
   }

  });



 