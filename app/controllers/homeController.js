'use strict';

var module = angular.module(
    'accessibilityAnnotationApp.home',
    [
        'accessibilityAnnotationApp.data'
    ]
);

module.controller(
    'HomeController',
    [
        '$scope', 'DataFactory',
        function($scope, DataFactory) {
            var viewModel = this;

            viewModel.availableApps = null;
            viewModel.availableScreens = null;

            viewModel.appSelection = {
                selected: null,

                onSelectCallback: function (item, model) {
                    viewModel.screenSelection.selected = null;
                    viewModel.updateAvailableScreens();
                }
            };

            viewModel.screenSelection = {
                selected: null,

                onSelectCallback: function (item, model) {

                }
            };

            viewModel.updateAvailableApps = function () {
                viewModel.availableApps = DataFactory.getApps();
                if (! viewModel.appSelection.selected) {
                    viewModel.appSelection.selected = viewModel.availableApps[0];
                    viewModel.updateAvailableScreens();
                }
            };

            viewModel.updateAvailableScreens = function () {
                viewModel.availableScreens = DataFactory.getScreens(viewModel.appSelection.selected);
                if (! viewModel.screenSelection.selected) {
                    viewModel.screenSelection.selected = viewModel.availableScreens[0];
                }
            };

            viewModel.updateAvailableApps();
        }
    ]
)
