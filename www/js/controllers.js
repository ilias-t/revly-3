angular.module('starter.controllers', [])

// Songs Controller
.controller('FeedCtrl', function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
})

//SoundCloud Controller
.controller('SearchCtrl', ["$scope", "soundCloud", function($scope, soundCloud) {
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

//Post Controller
.controller('PostCtrl', function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
  $scope.addSong = function(e, title, url) {
    $scope.songs.$add({
      title: title,
      url: url
    });
  }; 
});

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// })
