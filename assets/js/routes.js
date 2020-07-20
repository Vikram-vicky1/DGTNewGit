app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/main.html",
            controller: 'bodyController'
        })
        .when("/animation", {
            templateUrl: "template/services/animation.html",
            controller: 'bodyController'
        })
        .when("/3d_model", {
            templateUrl: "template/services/3d_model.html",
            controller: 'bodyController'
        })
        .when("/content_creation", {
            templateUrl: "template/services/content_creation.html",
            controller: 'bodyController'
        })
        .when("/light_panels", {
            templateUrl: "template/services/light_panels.html",
            controller: 'bodyController'
        })
        .when("/interactive_models", {
            templateUrl: "template/services/interactive_models.html",
            controller: 'bodyController'
        })
        .when("/exhibition_booths", {
            templateUrl: "template/services/exhibition_booths.html",
            controller: 'bodyController'
        })
        .when("/products_animations", {
            templateUrl: "template/products/softwares/animations.html",
            controller: 'bodyController'
        })
        .when("/power_3d", {
            templateUrl: "template/products/softwares/power_3d.html",
            controller: 'bodyController'
        })
        .when("/digital_twin", {
            templateUrl: "template/products/softwares/digital_twin.html",
            controller: 'bodyController'
        })
        .when("/training_3d", {
            templateUrl: "template/products/softwares/training_3d.html",
            controller: 'bodyController'
        })
        .when("/service_3d", {
            templateUrl: "template/products/softwares/service_3d.html",
            controller: 'bodyController'
        })
        .when("/vr_ar", {
            templateUrl: "template/products/softwares/vr_ar.html",
            controller: 'bodyController'
        })
        .when("/configurators", {
            templateUrl: "template/products/softwares/configurators.html",
            controller: 'bodyController'
        })
        .when("/automotive", {
            templateUrl: "template/products/digital_twin/automotive.html",
            controller: 'bodyController'
        })
        .when("/agriculture", {
            templateUrl: "template/products/digital_twin/agriculture.html",
            controller: 'bodyController'
        })
        .when("/industry", {
            templateUrl: "template/products/digital_twin/industry.html",
            controller: 'bodyController'
        })
        .when("/infrastructure", {
            templateUrl: "template/products/digital_twin/infrastructure.html",
            controller: 'bodyController'
        })
        .when("/how_5G_works", {
            templateUrl: "template/products/digital_twin/works.html",
            controller: 'bodyController'
        })
        .when("/interactive_booth", {
            templateUrl: "template/products/digital_twin/interactive_booths.html",
            controller: 'bodyController'
        })
        .when("/hydraulics", {
            templateUrl: "template/products/digital_twin/hydraulic.html",
            controller: 'bodyController'
        })
        .when("/magnetic_cards", {
            templateUrl: "template/products/hardware/magnetic_card.html",
            controller: 'bodyController'
        })
        .when("/interactive_lights", {
            templateUrl: "template/products/hardware/interactive_light.html",
            controller: 'bodyController'
        })
        .when("/products_interactive_models", {
            templateUrl: "template/products/hardware/interactive_models.html",
            controller: 'bodyController'
        })
        .when("/holograms", {
            templateUrl: "template/products/hardware/holograms.html",
            controller: 'bodyController'
        })
        .when("/contact", {
            templateUrl: "template/contact.html",
            controller: 'bodyController'
        })
        .when("/gallery", {
            templateUrl: "template/gallery.html",
            controller: 'bodyController'
        }).otherwise({
            redirectTo : '/'
        })
    $locationProvider.html5Mode(true)
});