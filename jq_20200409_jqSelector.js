/**
 * 
 */
$(document).ready(function(){
	//전체선택자 (*)
	$("*").css("background","red");
	//$("선택자").css("속성", "값");
	$("h1").css("color","yellow");//태그선택자.
	$("#idSelector").css({"color":"rgb(255,187,0","font-wight":"bold"})//id선택자
	//$(".classSelector").css("color","#6799FF")//class 선택자
	//속성이 2개 일때 $("선택자").css({속성:값,속성:값})
	$(".classSelector").css({"color":"#6799FF","background-color":"gray"})
	
	
})