const fs = require('fs');
const os = require('os');
const mangaReader = angular.module('manga-reader', ['ui.router']);

mangaReader.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
          url: '/home',
          component: 'library',
      })
      .state('library', {
          url: '/library',
          component: 'library',
      })
      .state('add', {
          url: '/add',
          component: 'add',
      })
      .state('search', {
          url: '/search',
          component: 'search',
      })


});
