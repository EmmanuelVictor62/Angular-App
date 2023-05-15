let app = angular.module("app", [
  "ngRoute",
  "ngAnimate",
  "hotelCard",
  "hotelDetails",
]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../hotelCard/hotel-card.html",
        controller: "HotelCardController",
      })
      .when("/hotel/:id", {
        templateUrl: "../hotelDetails/hotel-details.html",
        controller: "HotelDetailsController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

app.component("headerComponent", {
  templateUrl: "../component/header.html",
  controller: "AppController",
});

app.controller("AppController", [
  "$scope",
  function ($scope) {
    $scope.name = "Emmanuel";
  },
]);
