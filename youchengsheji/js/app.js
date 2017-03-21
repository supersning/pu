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
		         $stateProvider.state("caiwuguanli", {
		            url: "caiwuguanli",
		            templateUrl: "../Caiwuguanli/purse.html"
		       })
		          $stateProvider.state("fanhui", {
		            url: "fanhui",
		            templateUrl: "../shouye/homepage.html"
		       })
		          $stateProvider.state("xiugai", {
		            url: "xiugai",
		            templateUrl: "../Caiwuguanli/bound.html"
		       })
		          $stateProvider.state("ti", {
		            url: "ti",
		            templateUrl: "../Caiwuguanli/purse.html"
		       })
		          $stateProvider.state("chongzhi", {
		            url: "chongzhi",
		            templateUrl: "../Caiwuguanli/pay.html"
		       })
		          $stateProvider.state("jiao", {
		            url: "jiao",
		            templateUrl: "../Caiwuguanli/pay2.html"
		       })
		           $stateProvider.state("tijiao", {
		            url: "tijiao",
		            templateUrl: "../Caiwuguanli/purse.html"
		       })
		            $stateProvider.state("tixian", {
		            url: "tixian",
		            templateUrl: "../Caiwuguanli/withdraw.html"
		       })
		            $stateProvider.state("chakan", {
		            url: "chakan",
		            templateUrl: "../Caiwuguanli/select.html"
		       })
		            $stateProvider.state("fan", {
		            url: "fan",
		            templateUrl: "../Caiwuguanli/purse.html"
		       })
		            $stateProvider.state("dingdan", {
		            url: "dingdan",
		            templateUrl: "../Wodedingdan/Shangpindingdan/goods.html"
		       })
		          $stateProvider.state("bianhao", {
		            url: "bianhao",
		            templateUrl: "../Wodedingdan/Shangpindingdanxiangqing/details.html"
		       })  
		         $stateProvider.state("hui", {
		            url: "hui",
		            templateUrl: "../Wodedingdan/Shangpindingdan/goods.html"
		       })
		         $stateProvider.state("dianpu", {
		            url: "dianpu",
		            templateUrl: "../Wodedianpu/myshop.html"
		       })
		});