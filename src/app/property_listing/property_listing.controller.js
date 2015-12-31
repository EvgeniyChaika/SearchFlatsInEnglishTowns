/**
 * Created by evgeniy on 23.12.15.
 */
angular
    .module('searchApp')
    .controller('propertyListingController', myCtrl3);

//@ngInject
function myCtrl3($scope,$location, dataService) {
    console.log(dataService);
    console.log(dataService.view.price);
    $scope.view = dataService.view;
    $scope.goBackResults = function () {
        console.log("go Back -> results");
        $location.path("/result");
    };
}