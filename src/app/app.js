/**
 * Created by evgeniy on 23.12.15.
 */
var searchApp = angular.module('searchApp', [ "ngRoute", "ngMessages"]);
console.log("app.js");
searchApp.config(
    function ($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/search_form/search_form.template.html',
                controller: 'searchFormController'
            })
            .when('/result', {
                templateUrl: 'app/search_results/search_results.template.html',
                controller: 'searchResultsController'
            })
            .when('/property', {
                templateUrl: 'app/property_listing/property_listing.template.html',
                controller: 'propertyListingController'
            })
            .otherwise({
                redirectTo: '/search'
            });
    });
