'use strict';

var module = angular.module(
    'accessibilityAnnotationApp.report',
    [
        'accessibilityAnnotationApp.data'
    ]
);

module.controller(
    'ReportController',
    [
        '$scope', 'DataFactory',
        function($scope, DataFactory) {
            var viewModel = this;

            viewModel.apps = null;

            viewModel.updateApps = function () {
                viewModel.apps = DataFactory.getApps();
                viewModel.apps.forEach(function(element) {
                    element.screens = DataFactory.getScreens(element);
                });
            };

            viewModel.updateApps();
        }
    ]
)
