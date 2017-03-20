var myApp = angular.module("app", ['ui.router']);
		myApp.config(function ($stateProvider) {
		     $stateProvider.state("denglu", {
		            url: "denglu",
		            templateUrl: "register.html"
		       })
		     $stateProvider.state("deng", {
		            url: "deng",
		            templateUrl: "../shouye/homepage.html"
		       })
		     $stateProvider.state("reset", {
		            url: "reset",
		            templateUrl: "reset.html"
		       })  
		       $stateProvider.state("register", {
		            url: "register",
		            templateUrl: "login.html"
		       })  
		        $stateProvider.state("login", {
		            url: "login",
		            templateUrl: "../shouye/homepage.html"
		       })  
		        $stateProvider.state("youcheng", {
		            url: "youcheng",
		            templateUrl: "../youcheng/assist.html"
		       })
		        $stateProvider.state("shouye", {
		            url: "shouye",
		            templateUrl: "../shouye/homepage.html"
		       })
		         $stateProvider.state("pinglunguanli", {
		            url: "pinglunguanli",
		            templateUrl: "../pinglunguanli/comment.html"
		       })
		         $stateProvider.state("pinglun", {
		            url: "pinglun",
		            templateUrl: "../shouye/homepage.html"
		       })
		         
		});