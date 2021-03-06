angular.module('starter.controllers', ['ngCordova'])

  .controller('DashCtrl', function ($scope, $timeout, $cordovaImagePicker) {

    $scope.al = {
      title: 'I am a title',
      message: 'I am great message',
      button: 'My name is Button'
    };

    $scope.succ = function (res1) {
      var msg = 'good job = "' + res1 + '"';
      console.log(msg);
      $scope.success = msg;
    };

    $scope.succ2 = function (res1) {
      var msg = 'good job2 = "' + res1 + '"';
      console.log(msg);
      alert('A Серёжа молодец!\n\r' + msg);
      $timeout(function(){$scope.success = msg;});
    };

    $scope.alert = function () {
      console.log($scope.al.title, $scope.al.message, $scope.al.button);
      window.Photo.cam1($scope.al.title,$scope.al.message,$scope.al.button,
        function(data){
          $timeout(function(){$scope.succ(data)})
        });
/*
      window.Alert.alert($scope.al.title, $scope.al.message, $scope.al.button, function (d) {
        $timeout(function(d){$scope.succ(d)})
      });
*/
    };

    /*$scope.alert2 = function () {
      console.log($scope.al.title, $scope.al.message, $scope.al.button);
      window.Alert.alert2($scope.al.title, $scope.al.message, $scope.al.button, function (d) {
        $scope.succ2(d);
      });
    };
*/

/*
    $scope.wifi_search = function(){
      console.log('wifi start');
      alert('before start plugin');
      window.WiFiSDPlugin.start_wifisd_search(function(){
        console.log('wifi plag');
        alert('i am succes callback of wifi plugin');
      });
      alert('after start plugin');
      console.log('wifi end');
    };
*/

    $scope.picker = function () {
      $cordovaImagePicker.getPictures()
        .then(function (data) {
          alert('OK');
          alert('выбрано ' + data.length)
        }, function (error) {
          alert('ERROR');
          alert(data.stringify(error))
        })
    };


  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    }
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
