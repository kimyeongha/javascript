/**
 * 
 */
$(document).ready(function(){
	 //스크롤 이벤트
	$(window).scroll(function(){
 var scrollHeight =	$(window).scrollTop()+$(window).height();  //scrollTop 은 스크바 길이  그냥 window height는 스크롤 에서 스크롤바를 뺸 나머지 길이 
	var documentHeight=$(document).height();
	//scriollHeight 값과 documentHeight값이 같으면, 
	 if(scrollHeight==documentHeight){
		  for(var i=0 ; i<10; i++){
			  $("<h1>스크롤 이벤트에 의해 만들어진 h1태그</h1>").appendTo("body")
		  }
	 }
	//h1를 10개 더만들어라 (문서객체 생성)
	})
	
})