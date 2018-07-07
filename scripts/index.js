var app = angular.module("coursekiyaApp", []);

app.controller("homeController", ["$scope", "$filter", function($scope, $filter){
    var locations = [
        { id: 1, location: "Hyderabad" },
        { id: 2, location: "Bangalore" },
        { id: 3, location: "Chennai" },
        { id: 4, location: "Delhi" },
        { id: 5, location: "Mumbai" }
    ];

    $scope.locations = locations;
    $scope.selectedLocation = locations[0];

    $scope.selectLocation = function(id){
        var currentLocation = $filter('filter')(locations, { 'id': id });
        console.log(id +"<<<<");
        $scope.selectedLocation = currentLocation[0];
    }

    var courseType = [
        { id: 1, name: "Regular" },
        { id:2, name: "Weekend" }
    ];

    var category = [
        { id: 1, name: "IT" },
        { id: 2, name: "Non-IT" }
    ];

    $scope.courseType = courseType;
    $scope.category = category;
}]);