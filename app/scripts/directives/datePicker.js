'use strict';

angular.module('transportApp')
  .directive('ngDatePicker', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/common/date-picker.html',

    scope:{
    	date: '='
    },

    controller: function($scope, $timeout){
    	//var today = new Date();
	    var daysOfMonth = [];
	    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	    $scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	    $scope.showCalendar = false;

		$scope.date != null || $scope.date != undefined ? $scope.date = new Date($scope.date) : $scope.date = new Date();
		$scope.calendarDate = $scope.date;
		$scope.week=[];
   
	   	var getMonth = function(date){
			return months[date.getMonth()];
	    }

	    var getDay = function(date){
	    	return $scope.days[date.getDay()];
	    }

		$scope.month = getMonth($scope.calendarDate);
		$scope.year = $scope.calendarDate.getFullYear();
		$scope.day = getDay($scope.calendarDate);

		$scope.setDate = function(date){
			$scope.date = date.date;
			$timeout( function(){
				$scope.showCalendar = false;
			},500);
		}

		var generateDaysOfMonth = function(){
			daysOfMonth = [];
			$scope.weeks=[];
			var weekNumber = 0;
			var beginMonth = new Date($scope.year, $scope.calendarDate.getMonth() );
			var endMonth = new Date(beginMonth.getFullYear(), beginMonth.getMonth() + 1 );

			for (var d = beginMonth; d < endMonth; d.setDate(d.getDate() + 1) ) {
				var newDate = new Date(d.getFullYear(), d.getMonth() , d.getDate());
				var dayObj = {label:getDay(d), month:getMonth(d),day:d.getDate(), slot:d.getDay(), week:weekNumber, date:newDate};

				if( dayObj.slot === 6 ){
					weekNumber++;
				}
			    daysOfMonth.push(dayObj);
			}

			for( var w=0; w<6; w++){
				$scope.weeks.push(w);
			}
		}

		$scope.getWeek = function(week){
			
			var days = daysOfMonth.filter( function(w){
				return w.week === week;
			});

			if( !days.length ){
				for(var x=0; x<=6; x++){
					days.push(x);
				}
				return days;
			}

			var slot = days[0].slot;
			var day = days[0].day;

			//unshift
			if( day === 1 && slot !== 0 ){
				for(var x=0; x<slot; x++){
					days.unshift(x);
				}
			}
			
			//push
			var lastDay = daysOfMonth[daysOfMonth.length - 1];
			if( week === lastDay.week && lastDay.slot !== 6){
				var end = 6 - lastDay.slot;

				for(var x=0; x<end; x++ ){
					days.push(x);
				}
			}

			return days;
		}

		var generateWeek = function(){
			$scope.week=[];
			$scope.weeks.forEach( function(w){
				$scope.week.push($scope.getWeek(w));
			});
		}

		$scope.setMonth = function(month){
			$scope.calendarDate = new Date($scope.calendarDate.getFullYear(), month);
			$scope.month = getMonth($scope.calendarDate);
			$scope.year = $scope.calendarDate.getFullYear();
			$scope.day = getDay($scope.calendarDate);

			generateDaysOfMonth();
			generateWeek();
		}

		//init
		generateDaysOfMonth();
		generateWeek();

    }
  }
});