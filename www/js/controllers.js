angular.module('starter.controllers', [])
// Songs Controller
.controller('FeedCtrl', function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
})
.controller('SCCtrl', ["$scope", "soundCloud", function($scope, soundCloud){
  $scope.results = [];
  soundCloudAPI = soundCloud.API();
  $scope.searchSoundCloud = function(query) {
    soundCloudAPI.get('/tracks', {q: query, limit: 10}, function(tracks) {
      tracks.forEach(function(track){
        $scope.results.push({
          title: track.title
        });
      });
    });
  };
  // $scope.addSound = function(title) {
  //   $scope.results.push({
  //     title: title
  //   });
  // };
}])
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
