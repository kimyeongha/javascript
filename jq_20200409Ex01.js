/**
 * 
 */

$(document).ready(function(){
    $("tr:odd").css("background","orange");//1번문제
    $("tr:first").css({"background":"black" ,"color":"white"})//2번 문제
    
 var  array=["고구마","감자","배추","고추"]//배열선언.
       //each()메소드 사용. $.each(object,함수) $(선택자).each(object,함수)
    
  
  $.each(array,function(index,item)  {
	//array 배열객체의 각 요소를 저장하는 변수. 	  
	  var output="";
	  //<h1>고구마</h>
	  output+=output="<h1>"+item+"</h1>"
	    //  output="""<h1>고구마</h1>""<h1>고구마</h1>""<h1>배추</h1>"
 
    document.body.innerHTML+=output; //테이블도 body안에 포함 되있다. 거기에 더하기 위해서...
	  
	  //<p>dd</p> p로 닫듯이.. <h1>의 상위인 body
  })
    
 
    	
    

    
})