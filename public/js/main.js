requirejs.config({
    paths: {
        jquery: "/js/jquery-3.1.1.min",
        bootstrap: "/js/bootstrap-3.3.7.min",
        modernizr: "/js/modernizr",
        custom: "/js/custom"
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        custom: {
            deps: ['jquery']
        }
    }
});

//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery", "bootstrap", "modernizr", "custom"], function ($) {
    //Bootstrap and jquery are ready to use here
    //Access jquery and bootstrap plugins with $ variable
});