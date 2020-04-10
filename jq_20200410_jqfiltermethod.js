/**
 * 
 */
//filter method사용법 
//$(선택자).filter(선택자)
//$(선택자).filter(함수)
//$(선택자),filter(function(){})

//h1태그의 홀수번쨰 배경색 검쟁색 들 하여라.
//1. 필터선택자.
//2. 필터 메서드를 이용해서 해본다.
$(document).ready(function(){
//필터선택자
//	$("h1:even").css({"background":"black","color":"white"})
//})
//$("h1").filter(":even").css({"background":"black","color":"white"})
$("h1").filter(function(index){//index는 변수명
	return  index%2==0 //나머지가 0이면 짝수라는 뜻.//return 값이 true일때 .css실행하겠다.
}).css({"background":"black","color":"white"})

  // $("li").filter(":odd").css("background","green")
   $("li").filter(function(index){
	  return  $("small",this). length==1;
   }).filter(":first").css("background","green")
.end().filter(":last").css("color","green")
	 

})
	  
	




