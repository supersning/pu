$(function(){
	$(".contents>div").eq(0).show().siblings().hide();
	$("footer>dl").eq(0).addClass("active");
	$("footer>dl").tap(function(){
		$(".contents>div").eq( $(this).index() ).show().siblings().hide();
		$("footer>dl").eq( $(this).index() ).addClass("active").siblings().removeClass("active");
	});
	
	$(".swiper-wrapper>div").eq(1).addClass("active1");
	$(".swiper-wrapper>div").tap(function(){
		$(this).addClass("active1").siblings().removeClass("active1");
	})
	
	var swiper = new Swiper('.nav .swiper-container', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 3,
			        paginationClickable: true
		});
		
	var swiper = new Swiper('.banner .swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: 1,
	        paginationClickable: true,
	        loop: true,
	        autoplay:1000
	    });
})
