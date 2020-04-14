/**
 * 사용자 정의효과
 
 *   $(선택자).animate(속성,시간,easing,callback)
 */
$(document).ready(function(){
	$("div").hover(function(){ // hover(function1,function2)   function1 은 마우스 올려 놧을때 function2는 마우스를 땟을때
		   $(this).animate({left:500},"slow")
	},function(){
		$(this).animate({
			left:0
		},"slow")
		
		
	})
})
