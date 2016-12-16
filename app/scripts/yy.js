'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('yy',[]).directive("py", function() {
		return {
			restrict: "ECMA",
			template: '<div class="center"><header>新闻</header><div class="left"><ul><li ng-repeat="i in aaa">{{i.title | py}}</li></ul></div><div class="right" ng-repeat="i in bbb"><img ng-src={{i.img}} /></div></div>',
			scope: {
				aaa: '=a',
				bbb:'=b'
			},
			replace: true,
			link: function(s, e, a) {
				
			}
		}
	}).filter('py',function(){
 	return function(e){
				if (e.length>15) {
					return e.slice(0,15)+"***"
				} else{
					return e
				}
			}
 })
  