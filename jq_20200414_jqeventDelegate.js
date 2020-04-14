/**
 * 
 */
$(document).ready(function(){
	//%("선택자").on(이벤트명,선택자,데이터,핸들러)
	$("h1").on("click","h1", function(){      //.click 메소드 사용하는게 아니라 on 써야 delegate쓸수잇다.
		var length=$("h1").length;
		var targetHTML=$(this).html();
		$("#wrap").append("<h1>"+length+"-"+targetHTML+"</h1>")
		
		
	})                                            
	
})