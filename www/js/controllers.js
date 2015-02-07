angular.module('starter.controllers', [])

//Songs Controller
.controller('FeedCtrl', ["$scope", "fireBaseData", "$firebase", function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
}])

//SoundCloud Controller
.controller('SearchCtrl', ["$scope", "soundCloud", function($scope, soundCloud) {
  $scope.results = [];
  soundCloudAPI = soundCloud.API();
  $scope.consumerKey = "4c283a9658da34c8480ab86d30a9ba3e";
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

//Post Controller
.controller('PostCtrl', ["$scope", "fireBaseData", "$firebase", "$stateParams", function($scope, fireBaseData, $firebase, $stateParams) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
  $scope.addSong = function(e, title, url) {
    $scope.songs.$add({
      title: title,
      url: url
    });
  }; 
}]);