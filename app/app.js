var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .otherwise( {
            redirectTo: '/home'
        });
}]);

myNinjaApp.directive('randomMinja', [function() {

    return {
        restrict: 'E',
        scope: {
            minjas: '=',
            title: '='
        },
        //template: '<img ng-src="{{minjas[random].thumb}}">',
        // template: '{{title}}',
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    }; //object

}]);

myNinjaApp.controller('NinjaController', ['$scope', '$http',function($scope, $http) {

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

    // $http.get('../data/minjas.json').success(function(data) {
    //     $scope.minjas = data;
    //     console.log(data);
    // });

    $http.get('../data/minjas.json').then(function(res) {
        // console.log('This is data', res.data);
        // for (let o of res.data) {
        //     console.log(o.name);
        //     console.log(o.belt);
        //     console.log(o.rate);
        // }

        $scope.minjas = res.data;

    })

    $scope.message = "poruka neka";

    // $scope.minjas = [{
    //     name: "Milan",
    //     belt: "blue",
    //     rate: 50,
    //     available: true,
    //     thumb: "content/img/milan.png"
    // },
    // {
    //     name: "Marija",
    //     belt: "red",
    //     rate: 100,
    //     available: true,
    //     thumb: "content/img/marija.png"
    // },
    // {
    //     name: "Sima",
    //     belt: "black",
    //     rate: 10,
    //     available: true,
    //     thumb: "content/img/sima.png"
    // },
    // {
    //     name: "Milica",
    //     belt: "indianred",
    //     rate: 150,
    //     available: false,
    //     thumb: "content/img/milica.png"
    // }
    // ];


// console.log(angular.toJson($scope.minjas));

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
