(function() {
	'use strict';

	angular
	.module('uifaces', [])
	.directive('uifaces', uifaces);

	uifaces.$inject = [];

	/* @ngInject */
	function uifaces() {
    var directive = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      template: '<img ng-src="{{vm.imageUrls.normal}}">',
      replace: true
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  Controller.$inject = ['$http'];

  /* @ngInject */
  function Controller($http) {
    var vm = this;
    vm.imageUrls = '';

    activate();

    ////////////////

    function activate() {
      $http({
        method: 'GET',
        url: 'http://uifaces.com/api/v1/random'
      }).then(function successCallback(response) {
        vm.imageUrls = response.data.image_urls;
      }, function errorCallback(response) {
        console.log(response);
      });
    }
  }

})();
