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
})

//SoundCloud
.factory('soundCloud', function(){
  return {
    API: function() {
      return SC.initialize({
        client_id: "4c283a9658da34c8480ab86d30a9ba3e"
     });
    }
  }
});
