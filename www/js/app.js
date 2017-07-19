// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic-pullup', 'starter.controllers', 'starter.services', 'ionic-native-transitions'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
  // Each tab has its own nav history stack:

 

 
	
	.state('page1', {
      url: '/page1',
          templateUrl: 'templates/tab-page1.html',
          controller: 'Page1Ctrl'
        
      
    })
	.state('page2', {
      url: '/page2',
      templateUrl: 'templates/tab-page2.html',
      controller: 'Page2Ctrl'
        
      })
	.state('page3', {
      url: '/page3',
	  templateUrl: 'templates/tab-page3.html',
      controller: 'Page3Ctrl'
        
     })
	 
	 .state('page4', {
      url: '/page4',
	  templateUrl: 'templates/tab-page4.html',
      controller: 'Page4Ctrl'
        
     })
	 
	 .state('page5', {
      url: '/page5',
	  templateUrl: 'templates/tab-page5.html',
      controller: 'Page5Ctrl'
        
     })
	 
	 
	 .state('page6', {
      url: '/page6',
	  templateUrl: 'templates/tab-page6.html',
      controller: 'Page6Ctrl'
        
     })
	 
	 .state('page7', {
      url: '/page7',
	  templateUrl: 'templates/tab-page7.html',
      controller: 'Page7Ctrl'
        
     })
	 
	 .state('page8', {
      url: '/page8',
	  templateUrl: 'templates/tab-page8.html',
      controller: 'Page8Ctrl'
        
     })
	 
	 .state('page9', {
      url: '/page9',
	  templateUrl: 'templates/tab-page9.html',
      controller: 'Page9Ctrl'
        
     })
	 
	 .state('page10', {
      url: '/page10',
	  templateUrl: 'templates/tab-page10.html',
      controller: 'Page10Ctrl'
        
     })
	 
	 .state('pageLast', {
      url: '/pageLast',
	  templateUrl: 'templates/tab-pageLast.html',
      controller: 'PageLastCtrl'
        
     });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});
