angular
    .module('searchApp')
    .service('networkService', ["$http", function ($http) {
        this.getData = function (searchTown) {
            console.log("HTTP");
            console.log(searchTown);
            return $http({
                method: 'GET',
                url: "http://api.nestoria.co.uk/api?country=" +
                "uk&pretty=1&action=search_listings&encoding=json" +
                "&listing_type=buy&page=1&place_name=" + searchTown
            })
        };
    }]);