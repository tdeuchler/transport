'use strict';


angular.module('transportApp')
  .service('userService', ['$cookieStore', function ($cookieStore) { 

  	var currentUser = null;

    this.setCurrentUser = function(user) {
        currentUser = user;
        $cookieStore.put('user', user);

        return currentUser;
    };

    this.getCurrentUser = function() {
        if (!currentUser) {
            currentUser = $cookieStore.get('user');
        }

        return currentUser;
    };

  }]);