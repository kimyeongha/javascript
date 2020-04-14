/**
 * 
 */
$(document).ready(function(){
/*	
	//첫번째 요소의 HTML 문자열 확인.   
	var html= $("h1").html();
      alert(html)	;
      //각 요소들의 테스트 확인.  
      var text= $("h1").text();
      alert(text);	
	*/
	//$("선택자").html(htmlString)
	//$("div").html("<h1>html메소드입니다.</h1>")
	//$("선택자").text("적고싶은말")
	//$("div").text("<h1>text메소드입니다.</h1>")	
	//("선택자").html(function(){})
	$("div").text(function(index){
		return "<h1>Header-"+index+"</h1>"
	})
})