angular.module("demo", []);
angular.module("demo").controller("MyCtrl", function($scope, $http) {
  $http.get("/name").then(function(result) {
    $scope.name = result.data;
  });
});
// allows users to add lists and tickets
angular.module("demo", ["ngRoute"]).config(function($routeProvider) {
  console.log("configuring");
  $routeProvider.when("/board", {
    controller: "BoardPageCtrl",
    templateUrl: "/app/views/board_page.html"
  });
});
