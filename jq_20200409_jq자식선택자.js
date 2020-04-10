/**
 * 
 */
$(document).ready(function(){
	//자식선택자(부모>자식)  이친구는 div가 자손이니까 div에 들어갔지만
	  // $("body> *").css("color", "red");
	   

	
	//후손선택자(부모 자식) 이친구는 후손 전부니까 div ul li 전부 들어감.
	$("body *").css("color", "red");
	
})