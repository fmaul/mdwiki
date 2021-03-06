'use strict';

var controllers = controllers || angular.module('mdwiki.controllers', []);

controllers.controller('NewPageDialogCtrl', ['$rootScope', '$scope', 'ngDialog',
  function ($rootScope, $scope, ngDialog) {
    $scope.pageName = 'newpage';

    $scope.closeDialog = function () {
      ngDialog.close();
      $rootScope.$broadcast('create', { pageName: $scope.pageName });
    };
  }
]);
