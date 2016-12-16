'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
	.module('angularApp', ['ui.router','yy']).config(
		['$stateProvider', function($stateProvider) {
			$stateProvider.state('yy', {
				templateUrl: 'views/yy.html',
				url: '/yy',
				controller: 'yy'
			})
		}]).controller('yya',["$scope","$http", function($scope,$http) {
		$http({
			url: 'http://47.90.20.200:1602/news1/',
			method: 'get'
		}).then(function(da) {
			$scope.data1 = da.data;
			console.log(da.data);
		}, function() {})
		$http({
			url: 'http://47.90.20.200:1602/news-img1/',
			method: 'get'
		}).then(function(d) {
			$scope.data = d.data;
			console.log(d.data);
		}, function() {})
		$http({
			url: 'http://47.90.20.200:1602/news2/',
			method: 'get'
		}).then(function(da) {
			$scope.data2 = da.data;
			console.log(da.data);
		}, function() {})
		$http({
			url: 'http://47.90.20.200:1602/news-img2',
			method: 'get'
		}).then(function(d) {
			$scope.data3 = d.data;
			console.log(d.data);
		}, function() {})
	}])
