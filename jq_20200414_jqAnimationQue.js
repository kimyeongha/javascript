/**
 * 
 */
$(document).ready(function(){
	$("div").click(function(){
		//$(this).animate({속성1,속성2},시간)
		$(this) .animate({height:"+=60"},5000) //5초
		             .animate({left:"+=60"},3000)  //3초
		             .animate({width:"+=60"},2000)  //2초
		             .animate({height:"+=60"},1000)		 //1초
	})
	setInterval(function(){
		$("div").clearQueue();
		$("div").hide();
	},3000)      //위에 내용이 5초 3 초 2초 1초 가 실행 되는 도중에 clearQueue가 3초에 정지 시킨다.
})