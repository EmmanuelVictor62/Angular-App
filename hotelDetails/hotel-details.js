let hotelDetails = angular.module("hotelDetails", ["ngRoute"]);

hotelDetails.controller("HotelDetailsController", [
  "$scope",
  "$http",
  "$routeParams",
  function ($scope, $http, $routeParams) {
    $scope.hotelBenefits = [
      {
        iconClass: "fa-solid fa-key",
        content: "Lock on bedroom door",
      },
      {
        iconClass: "fa-solid fa-shirt",
        content: "Free laundry",
      },
      {
        iconClass: "fa-solid fa-envelope",
        content: "All round support",
      },
      {
        iconClass: "fa-solid fa-wifi",
        content: "Free wifi",
      },
      {
        iconClass: "fa-solid fa-car",
        content: "Free parking space ",
      },
      {
        iconClass: "fa-solid fa-tree",
        content: "Courtyard View ",
      },
    ];

    $http({
      method: "GET",
      url: "../angular/data/data.json",
    })
      .then(function (response) {
        $scope.hotels = response.data;

        $scope.hotelId = $routeParams.id;
        $scope.hotel = getHotelDetails($scope.hotelId);

        function getHotelDetails(id) {
          return $scope.hotels.find(function (hotel) {
            return hotel.id == id;
          });
        }

        console.log($scope.hotel);
      })
      .catch(function (error) {
        console.error("Error", error);
      });

    //
  },
]);
