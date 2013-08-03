'use strict';

/* Directives */

angular.module('mdwiki.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
