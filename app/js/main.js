/**
 * Main AngularJS Web Application
 */
 var app = angular.module('angularJsStarter', [
  'ngRoute', 'ngMaterial', 'ngImgCrop'
  ]);

/**
 * Configure the Routes
 */
 app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "views/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "views/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "views/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "views/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "views/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"});
  }]);

/**Filter **/
app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

/**
 * Controls all other Pages
 */
 app.controller('PageCtrl', function ($scope) {

  $scope.chips = [
  { category: 'Job1', name: 'Itégrateur Web' },
  { category: 'Job1', name: 'Développeur Mobile' },
  { category: 'Job1', name: 'Bullshiteur' },
  { category: 'Job2', name: 'UX Designer' },
  { category: 'Job2', name: 'Directeur Artistique' }
  ];

  $scope.poste = [
    { name: 'Alternant'},
    { name: 'Stagiaire'},
    { name: 'CDD'},
    { name: 'CDI'},
    { name: 'Temps Partiel'}
  ];

//New array of object = betterrrr need improvment
// $scope.competences = [
//   {category: 'Technologie', value: ['HTML5 - CCS3',
//                                     'Sass',
//                                     'Less',
//                                     'PhP',
//                                     'Javascript (Jquery)',
//                                     'Javascript (ES5)',
//                                     'Javascript (ES6)',
//                                     'Grunt',
//                                     'Gulp',
//                                     'Bower',
//                                     'Yo',
//                                     'Npm'],
//   },

//   {category: 'API', value: ['Google Maps',
//                            'Youtube',
//                            'Twitter',
//                            'Flickr',
//                            'Facebook'],
//   },

//   {category: 'Framework', value: ['Bootstrap',
//                                   'Greensock GSAP',
//                                   'Foundation by ZURB',
//                                   'Knockout',
//                                   'AngularJS',
//                                   'Angular Material',
//                                   'NodeJS',
//                                   'Backbone',
//                                   'Aurelia',
//                                   'Ember',
//                                   'React',
//                                   'MeteorJS',
//                                   'Polymer',
//                                   'jQuery Mobile',
//                                   'Kendo',
//                                   'Dojo',
//                                   'KnaCSS',
//                                   'Milligram'],
//   },

//   {category: 'Intégration CMS', value: ['eZ publish',
//                                         'Wordpress',
//                                         'Hybris',
//                                         'Drupal',
//                                         'Spip',
//                                         'Sharepoint',
//                                         'Magento',
//                                         'Prestashop']
// },

//   ];

  //
  $scope.competences = [
  {category: 'Technologie', value: 'HTML5 - CCS3'},
  {category: 'Technologie', value: 'Sass'},
  {category: 'Technologie', value: 'Less'},
  {category: 'Technologie', value: 'PhP'},
  {category: 'Technologie', value: 'Javascript (Jquery)'},
  {category: 'Technologie', value: 'Javascript (ES5)'},
  {category: 'Technologie', value: 'Javascript (ES6)'},
  {category: 'Technologie', value: 'Grunt'},
  {category: 'Technologie', value: 'Gulp'},
  {category: 'Technologie', value: 'Bower'},
  {category: 'Technologie', value: 'Yo'},
  {category: 'Technologie', value: 'Npm'},

  {category: 'API', value: 'Google Maps'},
  {category: 'API', value: 'Youtube'},
  {category: 'API', value: 'Twitter'},
  {category: 'API', value: 'Flickr'},
  {category: 'API', value: 'Facebook'},

  {category: 'Framework', value: 'Bootstrap'},
  {category: 'Framework', value: 'Greensock GSAP'},
  {category: 'Framework', value: ' Foundation by ZURB'},
  {category: 'Framework', value: 'Knockout'},
  {category: 'Framework', value: 'AngularJS'},
  {category: 'Framework', value: 'Angular Material'},
  {category: 'Framework', value: 'NodeJS'},
  {category: 'Framework', value: 'Backbone'},
  {category: 'Framework', value: 'Aurelia'},
  {category: 'Framework', value: 'Ember'},
  {category: 'Framework', value: 'React'},
  {category: 'Framework', value: 'MeteorJS'},
  {category: 'Framework', value: 'Polymer'},
  {category: 'Framework', value: 'jQuery Mobile'},
  {category: 'Framework', value: 'Kendo'},
  {category: 'Framework', value: 'Dojo'},
  {category: 'Framework', value: 'KnaCSS '},
  {category: 'Framework', value: 'Milligram '},

  {category: 'Intégration CMS', value: 'eZ publish'},
  {category: 'Intégration CMS', value: 'Wordpress'},
  {category: 'Intégration CMS', value: 'Hybris'},
  {category: 'Intégration CMS', value: 'Drupal'},
  {category: 'Intégration CMS', value: 'Spip'},
  {category: 'Intégration CMS', value: 'Sharepoint'},
  {category: 'Intégration CMS', value: 'Magento'},
  {category: 'Intégration CMS', value: 'Prestashop'},

  ];

  $scope.competenceCategorys = [
    {value: 'Intégration CMS'},
    {value: 'Framework'},
    {value: 'API'},
    {value: 'Technologie'}
  ];

  $scope.userCompetences = [];
// _.orderBy($scope.userCompetences, 'category', 'asc');


$scope.userUltimate = [];

//Save data info to Json
$scope.update = function(userUltimate, user, userCompetences) {
  $scope.userUltimate = $scope.userCompetences.concat($scope.user); 
};


  $scope.toggle = function (value, list) {
    var index = list.indexOf(value);
    if (index > -1) list.splice(index, 1);
    else list.push(value);
  };

  $scope.exists = function (value, list) {
    return list.indexOf(value) > -1;
  };

    $scope.addElement = function() {
        $scope.competences.push($scope.newCompetence);
        $scope.newCompetence ='';
    };


 $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);


});



