angular.module('starter.controllers', [])
// Songs Controller
.controller('FeedCtrl', ["$scope", "fireBaseData", "$firebase", function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
}])
.controller('SCCtrl', ["$scope", "soundCloud", function($scope, soundCloud) {
  $scope.results = [];
  soundCloudAPI = soundCloud.API();
  //Search SoundCloud
  $scope.searchSoundCloud = function(query) {
    soundCloudAPI.get('/tracks', {q: query, limit: 10}, function(tracks) {
      //$scope.$apply 
      $scope.$apply(function() {
        //Clear the DOM
        $scope.results = [];
        //Render results
        $scope.results = $scope.results.concat(tracks);
        console.log($scope.results);
      })
    });
  };
}])
.controller('PostCtrl', ["$scope", "fireBaseData", "$firebase", "$stateParams", function($scope, fireBaseData, $firebase, $stateParams) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
  $scope.addSong = function(e, title, url) {
    $scope.songs.$add({
      title: title,
      url: url
    });
  }; 
}]);