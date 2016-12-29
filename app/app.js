var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

myNinjaApp.controller('NinjaController', ['$scope',function($scope) {

    $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.minjas.indexOf(ninja);
        $scope.minjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.minjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });
        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    };

    $scope.message = "poruka neka";

    $scope.minjas = [{
        name: "Milan",
        belt: "blue",
        rate: 50,
        available: true,
        thumb: "content/img/milan.png"
    },
    {
        name: "Marija",
        belt: "red",
        rate: 100,
        available: true,
        thumb: "content/img/marija.png"
    },
    {
        name: "Sima",
        belt: "black",
        rate: 10,
        available: true,
        thumb: "content/img/sima.png"
    },
    {
        name: "Milica",
        belt: "indianred",
        rate: 150,
        available: false,
        thumb: "content/img/milica.png"
    }
    ];


}]);


// app.controller('PeopleCtrl', ['$scope', function($scope) {
// $scope.people = [
// {
// firstName: 'Colin',
// lastName: 'Ihrig'
// },
// {
// firstName: 'Adam',
// lastName: 'Bretz'
// }
// ];
// }]);
