'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap',
'uiGmapgoogle-maps', 'ngGeolocation'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    uiGmapGoogleMapApiProvider: any) => {

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCkjNljMxUIJLNtrQOIwe4A0tdvz27qD8Q',
    });

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
