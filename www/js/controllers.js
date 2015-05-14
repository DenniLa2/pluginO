angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $timeout) {

    $scope.al = {
      title: 'I am a title',
      message: 'I am great message',
      button: 'My name is Button'
      };

    $scope.succ = function () {
      console.log('good job');
      $scope.success = 'good job!';
    };

        $scope.alert = function () {
      console.log($scope.al.title, $scope.al.message, $scope.al.button);
      window.Alert.alert($scope.al.title, $scope.al.message, $scope.al.button, function(){ $timeout($scope.succ)});
    }
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
