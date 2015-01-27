angular.module('starter.controllers', [])
// Songs Controller
.controller('SongsCtrl', function($scope, fireBaseData, $firebase) {
  $scope.songs = $firebase(fireBaseData.refSongs()).$asArray();
  $scope.addSong = function(e) {
    $scope.songs.$add({
      title: $scope.title,
      url: $scope.url
    });
    $scope.title = "";
    $scope.url = "";
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
