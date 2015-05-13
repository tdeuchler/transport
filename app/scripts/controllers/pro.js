'use strict';

angular.module('transportApp')
  .controller('ProCtrl', function ($scope, $routeParams, $location, userService, $filter) {

    //security for now
    var user = userService.getCurrentUser();
    if( !user || user.access_token === null ){
      $location.path('/');
    }

    $scope.animate = false;

  	$scope.id = $routeParams.id;
  	$scope.showDetail = false;
    $scope.pageTitle = '';

  	if( $routeParams.id  ){
  		$scope.showDetail = true;
      $scope.pageTitle = 'INV# ' + $scope.id;
  	}

    $scope.proInfo = {};
    $scope.proInfo.date = '07/04/2011';
    $scope.proInfo.options = [{value:'small', default:false},{value:'medium', default:false},
    {value:'large', default:true},{value:'x-large', default:false}];
    $scope.proInfo.driver = 'Tim Deuchler';
    $scope.proInfo.phone = '7086380541';
    $scope.proInfo.unit = 432;
    $scope.proInfo.trl = 'green floss';
    $scope.proInfo.ref = '23QQ32_R1';
    $scope.proInfo.miles = 129.5;
    $scope.proInfo.commodity = 'gold';
    $scope.proInfo.weight = 1020302;
    $scope.proInfo.pcs = 1000
    $scope.proInfo.seal = '23kUSA_z'
    $scope.proInfo.loadStatus = 'success';

    $scope.proInfo.sizeOptions = [{value:10, label:'10 ST'}, {value:20, label:'20 ST'},{value:30, label:'30 ST'}, {value:40, label:'40 ST'}];
    $scope.proInfo.size = '';

    $scope.customerInfo = {};
    $scope.customerInfo.customer = 'Nippon Express';
    $scope.customerInfo.billTo = 'Nippon Express';

    /******************************
    * b expenseInfo
    ******************************/

    $scope.expenseInfo = {};
    $scope.expenseInfo.gridOptions = {};


    $scope.expenseInfo.gridOptions.rowTemplate = '<div class="expense-info-row" ng-class="{ \'my-css-class\': grid.appScope.rowFormatter( row ) }">' +
                 '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell></div>' +
                 '</div>';

    $scope.expenseInfo.gridOptions.columnDefs = [
            {field:'remove',enableCellEdit: false, cellTemplate: '<div class="remove-expense" ng-click="grid.appScope.expenseInfo.remove( row )"><i class="fa fa-trash-o"></i></div>', width:73},
        {field:'chargeType', displayName: 'Charge Type'},
        {field:'amount', displayName: 'Amount', type:'number'},
        {field:'fsc_p', displayName: 'Fsc (%)'},
        {field:'fsc_m', displayName: 'Fsc ($)'},
        {field:'note', displayName: 'Notes'}
      ];

    $scope.expenseInfo.total = 0;
    var expenseInfoData = []; //[{chargeType:'test', amount:11.21, fsc_p:'', fsc_m:'', note:'my notes'}];
    $scope.expenseInfo.gridOptions.data = []; //expenseInfoData;

    var addExpensesTotal = function(){
      var total = 0.00;
      $scope.expenseInfo.gridOptions.data.forEach( function(expense){
        total +=  Number(expense.amount);
      });

      $scope.expenseInfo.total = total; //$filter('currency')(total, '$', 2);

    }

    $scope.expenseInfo.add = function(){
      var expense = {chargeType:'', amount:0.00, fsc_p:'', fsc_m:'', note:''};
      $scope.expenseInfo.gridOptions.data.push(expense);
    }

    $scope.expenseInfo.remove = function(row){
      $scope.expenseInfo.gridOptions.data = $scope.expenseInfo.gridOptions.data.filter( function(r){
        return r.$$hashKey != row.entity.$$hashKey;
      });
      addExpensesTotal();
    }

    //addExpensesTotal();
    $scope.expenseInfo.gridOptions.enableColumnResizing = true;
    $scope.expenseInfo.gridOptions.enableSorting = false;

     $scope.expenseInfo.gridOptions.onRegisterApi = function(gridApi){
          //set gridApi on scope
          $scope.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            addExpensesTotal();
            $scope.$apply();
          });
        };

    /*************************
    * billing info
    ********************************/
    $scope.billingInfo = {};

    $scope.billingInfo.gridOptions = {};

    $scope.billingInfo.gridOptions.rowTemplate = '<div class="billing-info-row" ng-class="{ \'my-css-class\': grid.appScope.rowFormatter( row ) }">' +
                 '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell></div>' +
                 '</div>';

    $scope.billingInfo.gridOptions.columnDefs = [
        {field:'remove',enableCellEdit: false, cellTemplate: '<div class="remove-expense" ng-click="grid.appScope.billingInfo.remove( row )"><i class="fa fa-trash-o"></i></div>', width:73},
        {field:'chargeType', displayName: 'Charge Type'},
        {field:'amount', displayName: 'Amount', type:'number'},
        {field:'fsc_p', displayName: 'Fsc (%)'},
        {field:'fsc_m', displayName: 'Fsc ($)'},
        {field:'note', displayName: 'Notes'}
      ];

    $scope.billingInfo.total = 0;

    $scope.billingInfo.gridOptions.data = []; //expenseInfoData;

    var addBillingTotal = function(){
      var total = 0.00;
      $scope.billingInfo.gridOptions.data.forEach( function(expense){
        total +=  Number(expense.amount);
      });

      $scope.billingInfo.total = total; //$filter('currency')(total, '$', 2);

    }

    $scope.billingInfo.add = function(){
      var bill = {chargeType:'', amount:0.00, fsc_p:'', fsc_m:'', note:''};
      $scope.billingInfo.gridOptions.data.push(bill);
    }

    $scope.billingInfo.remove = function(row){
      $scope.billingInfo.gridOptions.data = $scope.billingInfo.gridOptions.data.filter( function(r){
        return r.$$hashKey != row.entity.$$hashKey;
      });
      addBillingTotal();
    }
    
    $scope.billingInfo.gridOptions.enableColumnResizing = true;
    $scope.billingInfo.gridOptions.enableSorting = false;

     $scope.billingInfo.gridOptions.onRegisterApi = function(gridApi){
          //set gridApi on scope
          $scope.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            addBillingTotal();
            $scope.$apply();
          });
        };


    /*******************************
    * misc info
    ********************************/
    $scope.miscInfo = {};
    $scope.miscInfo.notes = [
      {note:'Driver had a flat tire on the Edens', author:'Brian Smith', timeStamp: new Date('04/10/2015 10:00:00')},
      {note:'9 out of 10 packages made it to the center.', author:'Matt Choi', timeStamp: new Date('05/05/2015 15:20:00')},
      {note:'Bad weather, late arrival.', author:'Matt Choi', timeStamp: new Date('05/15/2015 15:20:00')},
       {note:'It was a hard road to paradise', author:'John Williams', timeStamp: new Date('03/05/2015 19:22:00')}
      ];


    /*******************************
    * attachments
    ********************************/
    $scope.attachments = {};
    $scope.attachments.attachments = [{file:'http://www.google.com'},{file:'http://www.cnn.com'}];

  });
