$(function(){
	$(".uls li").click(function(){
//		console.log( $(this).index() );
		$(this).addClass("active").siblings().removeClass("active");
	})
	var arr=["xin1_03","bu1_03","shui1_06","jiuzuo1_12"];
	$(".banner_imgs dl").click(function(){
		$(this).addClass("active1").siblings().removeClass("active1");   //背景色
		$(".ban_timer>div").eq( $(this).index() ).show().siblings().hide();   //切换盒子
		$.each($(".banner_imgs dl"), function(i,v) {
			$(this).find("img").attr("src","img/images/"+arr[i]+".png");
		});
		var $a = $(this).find("img").attr("data_list");
		$(this).find("img").attr("src",$a);
	})
})
