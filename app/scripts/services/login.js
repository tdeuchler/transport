'use strict';


angular.module('transportApp')
.service('loginService', function($http, $q) {

    

    this.login = function(user){

          var deferred = $q.defer();
 
    
//$http.get('/authenticate').then(deferred.resolve, deferred.reject );
//$http.post('http://authentication.com', user).then(deferred.resolve, deferred.reject );

/*
$http.post('http://authentication.com', user).success(function(data) {
	console.log('my data:', data);
      if(false) {
          deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
  }).error(function(error) {
      deferred.reject(error);
  });
*/

var url = 'http://authentication.com/auth';


  $http({
method: 'POST',
url: url,
data: user,
headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function(data) {

      if(data) {
          deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
  }).error(function(error) {
      deferred.reject(error);
  });


return deferred.promise;

    }
});