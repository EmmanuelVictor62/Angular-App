let hotelCard = angular.module("hotelCard", []);

hotelCard.controller("HotelCardController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http({
      method: "GET",
      url: "../angular/data/data.json",
    })
      .then(function (response) {
        $scope.hotels = response.data;
      })
      .catch(function (error) {
        console.error("Error", error);
      });

    $scope.selectedIcon = null;

    $scope.toggleIconColor = function (index) {
      if ($scope.selectedIcon === index) {
        $scope.selectedIcon = null;
      } else {
        $scope.selectedIcon = index;
      }
    };

    $scope.className = function (index) {
      if ($scope.selectedIcon === index) {
        return "fa-solid fa-heart";
      } else {
        return "fa-regular fa-heart";
      }
    };

    $scope.searchText = "";

    $scope.searchFilter = function (hotel) {
      var searchText = $scope.searchText.toLowerCase();
      var city = hotel.city.toLowerCase();
      var country = hotel.country.toLowerCase();

      return (
        city.indexOf(searchText) !== -1 || country.indexOf(searchText) !== -1
      );
    };
  },
]);

hotelCard.filter("capitalize", function () {
  return function (input) {
    if (input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    return input;
  };
});
