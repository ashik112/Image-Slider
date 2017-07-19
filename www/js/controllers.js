angular.module('starter.controllers', [])





.controller('Page1Ctrl', function($scope,$state,$window,$location,$ionicNativeTransitions) {
	$scope.pages=['1. How to Use','2. About Us','3. Services','4. Services 1','5. Services 2','6. Services 3','7. Services 4','8. Gallery','9. Gallery 1', '10. Team', '11. Contact'];
	console.log("Page 1");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	console.log("Width: "+ $window.innerWidth);
	console.log("Height: "+$window.innerHeight);
	
	 $scope.footerExpand = function() {
 	console.log('Footer expanded');
    };
    $scope.isEnergized = true;
    $scope.toggleEnergized = function(){
		$scope.isEnergized =  !$scope.isEnergized;
    }
    $scope.footerCollapse = function() {
		console.log('Footer collapsed');
    };
	
	
	
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page1");
		//$state.go('page2');
		 $ionicNativeTransitions.locationUrl('/page2', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	/*$scope.onSwipeRight=function()
	{
		console.log("swipe right Page2");
		  $ionicNativeTransitions.locationUrl('/page3', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 4000, // in milliseconds (ms), default 400
	   });
	}*/



})

.controller('Page2Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 2");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page2");
		   $ionicNativeTransitions.locationUrl('/page3', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		
		console.log("swipe right Page2");
		   $ionicNativeTransitions.locationUrl('/page1', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.more = function()
	{
		alert("More");
	}


})

.controller('Page3Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 3");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page3");
		  $ionicNativeTransitions.locationUrl('/page4', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page3");
		   $ionicNativeTransitions.locationUrl('/page2', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.more = function()
	{
		alert("More");
	}

})

.controller('Page4Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 4");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page5");
		  $ionicNativeTransitions.locationUrl('/page5', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page3");
		   $ionicNativeTransitions.locationUrl('/page3', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.more = function()
	{
		alert("More");
	}

})

.controller('Page5Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 5");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page6");
		  $ionicNativeTransitions.locationUrl('/page6', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page3");
		   $ionicNativeTransitions.locationUrl('/page4', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page6Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 6");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page7");
		  $ionicNativeTransitions.locationUrl('/page7', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page5");
		   $ionicNativeTransitions.locationUrl('/page5', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page7Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 7");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page8");
		  $ionicNativeTransitions.locationUrl('/page8', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page6");
		   $ionicNativeTransitions.locationUrl('/page6', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page8Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 8");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page9");
		  $ionicNativeTransitions.locationUrl('/page9', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page7");
		   $ionicNativeTransitions.locationUrl('/page7', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page9Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 9");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left Page10");
		  $ionicNativeTransitions.locationUrl('/page10', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page8");
		   $ionicNativeTransitions.locationUrl('/page8', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page10Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 10");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left PageLast");
		  $ionicNativeTransitions.locationUrl('/pageLast', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page9");
		   $ionicNativeTransitions.locationUrl('/page9', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('Page11Ctrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	console.log("Page 11");
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		console.log("swipe left PageLast");
		  $ionicNativeTransitions.locationUrl('/pageLast', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page10");
		   $ionicNativeTransitions.locationUrl('/page10', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('PageLastCtrl', function($scope,$window,$state,$location,$ionicNativeTransitions) {
	//$scope.service=Chats;
//	$scope.page='';
	console.log("Page Last");
	//$scope.pages=['1. How to Use','2. About Us','3. Services','4. Services 1','5. Services 2','6. Services 3','7. Services 4','8. Gallery','9. Gallery 1', '10. Team', '11. Contact'];
//	$scope.pages=Chats.all();
	$scope.goTo=function(page)
	{
		//Chats.goTo(page);
	}
	$scope.dev_width = $window.innerWidth;
	$scope.dev_height = $window.innerHeight;
	$scope.onSwipeLeft=function()
	{
		/*console.log("swipe left Page3");
		  $ionicNativeTransitions.locationUrl('/page1', {
		"type": "slide",
		"direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });*/
	}
	$scope.onSwipeRight=function()
	{
		console.log("swipe right Page10");
		   $ionicNativeTransitions.locationUrl('/page10', {
		"type": "slide",
		"direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
		"duration": 400, // in milliseconds (ms), default 400
	   });
	}

})

.controller('navigationCtrl', function($scope,$state,$location,$ionicPopover) {
	
	$ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }
	

})
