angular
    .module('searchApp')
    .controller('searchResultsController', myCtrl1);

//@ngInject
function myCtrl1($scope, $location, dataService) {
    $scope.items = dataService.data.array;
    $scope.totalPages = dataService.data.pages;
    console.log("SearchResultsController");
    $scope.goBack = function () {
        console.log("go Back -> search");
        $location.path("/search");
    };
    $scope.viewPage = function (index){
        console.log("go Third Page -> property");
        dataService.view = index;
        $location.path("/property");
    }
}
