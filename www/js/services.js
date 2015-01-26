angular.module('starter.services', [])

// Firebase
.factory('fireBaseData', function($firebase) {
  var ref = new Firebase("https://revly.firebaseio.com/"),
      refSongs = new Firebase("https://revly.firebaseio.com/songs");
  return {
    ref: function() {
        return ref;
    },
    refSongs: function() {
        return refSongs;
    }
  }
});
