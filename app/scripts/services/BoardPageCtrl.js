angular.module("demo").controller("BoardPageCtrl", function($scope) {
  $scope.list = [
    {
      name: "list 1",
      tickets: [{ title: "task 1" }, { title: "task 2" }]
    },
    {
      name: "list 2",
      tickets: [{ title: "task 3" }, { title: "task 4" }]
    }
  ];
});

// above, an array of lists, each list has a name and its tickets, each ticket has a title.
