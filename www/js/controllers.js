angular.module('starter.controllers', [])

// Songs Controller
.controller('FeedCtrl', ["$scope", "fireBaseData", "$firebase", function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
<<<<<<< HEAD
})

//SoundCloud Controller
.controller('SearchCtrl', ["$scope", "soundCloud", function($scope, soundCloud) {
=======
}])
.controller('SCCtrl', ["$scope", "soundCloud", function($scope, soundCloud) {
>>>>>>> 71e5318efa1bb7199ba827e636c69afa85d599e3
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
<<<<<<< HEAD

//Post Controller
.controller('PostCtrl', function($scope, fireBaseData, $firebase) {
=======
.controller('PostCtrl', ["$scope", "fireBaseData", "$firebase", "$stateParams", function($scope, fireBaseData, $firebase, $stateParams) {
>>>>>>> 71e5318efa1bb7199ba827e636c69afa85d599e3
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
  $scope.addSong = function(e, title, url) {
    $scope.songs.$add({
      title: title,
      url: url
    });
  }; 
}]);