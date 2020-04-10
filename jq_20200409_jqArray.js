/**
 * 
 */
$(document).ready(function(){
	



	//배열선언
	var array=[
		{name:"Google",link:"https://www.google.co.kr/" }
		{name:"Naver",link:"https://www.naver.com/" }
		{name:"Daum",link:"https://www.daum.net/" }
		
		
		];
	  //each()메서드 사용
	$.each(array,function(index,item){
		var output="";
		output+="<a href="+item,link+">"
		output+=item.name;
		output+="</a></br>";
		
       doucument.body.innerHTML+=output;
	})
	
	
	
	
	
	//$("h1").addClass("header")
	/*$("h1").each(function(index,item){
		$(item).addClass("header-"+index);
		$("h1").removeClass("header-2")
		
	})
	*/
})