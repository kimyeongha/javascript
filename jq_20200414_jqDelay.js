/**
 * 
 */
$(document).ready(function(){
	$("div").each(function(index){
		//(index*1000)초 후 animate 메서드 실행
      $(this).delay(index*1000).animate({left:500},"slow")
	})
	
})