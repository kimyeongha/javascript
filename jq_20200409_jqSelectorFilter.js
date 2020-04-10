/**
 * 
 */
$(document).ready(function(){
     //모든 input 태그 선택 
	//$(":input").val('안녕')
	// type="text"인 모든 태그 선택.
	//$(":text").val("안녕");
	//$(":password").val("1234");
	//$(":radio").val();
	//$("checkbox").val();
	//$(":image").css("border","3px red solid")
	//$(":reset").css("color","orange");
	//$(":button").val("확인");
	//$(":enabled").css("background","red")
	//$(":disabled").css("background","yellow")
	/*setInterval(function()
			{$(":selected").css("background", "green")	}
	,5000)

	
	setInterval(function(){$(":focus").css("background","red")},
			5000)*/
	//$("tr:first").css({"background":"black ", "color":"white"})
	//$("tr:last").css({"background":"yellow","color":"black"})
	//$("tr:even").css({"background":"gray","color":"black"})
    //$("tr:odd").css({"background":"black","color":"white"})
      $("tr:eq(0)").css({"background":"black ", "color":"white"})  //eq(0) 인덱스 선택자  0부터시작,nth-child(n) 1부터시작
      $("td:nth-child(3n)").css("background","skyblue")
         $("td:nth-child(3n+1)").css("background","red")
            $("td:nth-child(3n+2)").css("background","green")
      



})