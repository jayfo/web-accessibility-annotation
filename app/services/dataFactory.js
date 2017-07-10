'use strict';

var module = angular.module(
    'accessibilityAnnotationApp.data',
    [
    ]
);

module.factory(
    'DataFactory',
    function() {
        var factory = {};

        factory._apps = [
            { id: "@1", name: "skype" },
            { id: "@2", name: "toca" },
            { id: "@3", name: "yelp" },
        ];

        factory.getApps = function () {
            return factory._apps;
        };

        factory._screens = {
            "@1": [
                {
                    id: "@1@1",
                    name: "skype1",
                    urlImage: "data/skype1/image.png"
                }
            ],
            "@2": [
                {
                    id: "@2@1",
                    name: "toca1",
                    urlImage: "data/toca1/image.png"
                }
            ],
            "@3": [
                {
                    id: "@3@1",
                    name: "yelp1",
                    urlImage: "data/yelp1/image.png"
                },
                {
                    id: "@3@2",
                    name: "yelp2",
                    urlImage: "data/yelp2/image.png"
                }
            ],
        };

        factory.getScreens = function (app) {
            return factory._screens[app.id];
        };

        return factory;
    }
);
