/**
 * 
 */
$(document).ready(function(){
	$("button").click(function(){
		var html=$(this).html();   //.html() 니까 요소를 들고 온다..
		//alert(html);
	   var Text	="$('div')."+html  //$('div').stop( )
	  // alert(Text)
	eval(Text); // eval()메소드는 문자열에 문자가 메소드일때 그 메소드를 사용하기 위해 문자를 코드로 인식하게 해주는 메소드
	
	
	});
//애니메이션실행
setInterval(function(){
	 $("div").animate({left:"500"},1000)
                   .animate({left:"0"},1000)
	
	
},2000)

})