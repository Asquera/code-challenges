var codeChallengesApp = angular.module('codeChallengesApp', []);

codeChallengesApp.controller('ExcerciseListCtrl', function ($scope) {
  $scope.excercises = [
    {'name': 'SSH key konfigurieren',
     'snippet': 'Distillery irony neutra organic fugiat. Meditation occaecat keytar cornhole, mixtape next level blue bottle et meh stumptown messenger bag mlkshk.'},
    {'name': 'Fizzbuzz',
     'snippet': 'Heirloom yr esse, pug beard VHS excepteur artisan sed photo booth intelligentsia. Qui sapiente +1 90\'s, occupy vegan williamsburg ea velit magna yuccie elit.'},
    {'name': 'Dotfiles einrichten',
     'snippet': 'Distillery cray pop-up semiotics minim laboris. Twee you probably haven\'t heard of them locavore, blue bottle DIY farm-to-table kickstarter hoodie pabst aliqua lomo.'}
  ];
  $scope.orderProp = 'name'; 
  // default Auswahl, $scope.orderProp = '-name'; umgekehrte Sortierung
});