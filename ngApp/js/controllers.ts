namespace app.Controllers {
  export class HomeController {
    public center = {latitude: 47.671853, longitude: -122.121328};
    public zoom = 15;
    constructor($geolocation, $scope) {
      $geolocation.getCurrentPosition({
        timeout: 60000
      }).then(function(position) {
        console.log(position);
      });
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
