angular
    .module('searchApp')
    .controller('searchFormController', myCtrl2);

//@ngInject
function myCtrl2($scope, $location, networkService, dataService) {
    $scope.onSubmit = function () {
        console.log("SearchFormController");
        $scope.loader = true;
        networkService.getData($scope.city)
            .success(function (data) {
                dataService.data = {
                    array: data.response.listings,
                    pages: data.response.total_pages
                };
                $location.path('/result');
            })
            .error(function () {
                $scope.errorMessage = 'There was a problem with your search';
            })
            .finally(function () {
                $scope.loader = false;
            })
    }
}
