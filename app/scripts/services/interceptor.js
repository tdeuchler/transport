'use strict';

/******************
every request
puts in the auth token
*/


angular.module('transportApp')
.service('APIInterceptor', function($rootScope, userService) {

    this.request = function(config) { 
      
        var currentUser = userService.getCurrentUser(),
            access_token = currentUser ? currentUser.access_token : null;

        if (access_token) {
            config.headers.authorization = access_token;
        }

        return config;
    };

    this.responseError = function(response) {
        if (response.status == 401) {
           console.log(401);
        }
        return response;
    };
});