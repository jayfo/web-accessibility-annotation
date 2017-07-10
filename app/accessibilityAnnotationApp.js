'use strict';

var accessibilityAnnotationApp = angular.module(
    'accessibilityAnnotationApp',
    [
        'accessibilityAnnotationApp.data',
        'accessibilityAnnotationApp.home',
        'accessibilityAnnotationApp.report',
        'ngRoute',
        'ui.bootstrap',
        'ui.select'
    ]
);

accessibilityAnnotationApp.config(
    [
        '$locationProvider',
        function($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    ]
);

accessibilityAnnotationApp.config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller:   'HomeController',
                    templateUrl:  'app/views/homeView.html',
                    controllerAs: 'viewModel'
                })
                .when('/report/', {
                    controller:   'ReportController',
                    templateUrl:  'app/views/reportView.html',
                    controllerAs: 'viewModel'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]
);
