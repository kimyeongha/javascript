/**
 * 
 */
$(document).ready(function(){
  $("textarea").keyup(function(){
	 var inputlength =  $(this).val().length;             //textarea의 값을val()메소드를 통해 가져온다 .그것을 길이를 잰다.
     var maxlength = 100- inputlength; //최대 100자에서 사용자가 입력한 문자수를 뺴서 다음에 입력할 최대 글자수를 알아 낸다.
       $("h1").html(maxlength);//h1태그에 100자 대신에 최대 글자수를 출력     
                                                     //최대 글자수가 0이상이면 글자색을 검정색
           if(maxlength>=0){
        	   $("h1").css("color","black")
           }else{
        	   $("h1").css("color","red")
        	   alert("100자넘었다")
           }                                        //그렇지 않으면 글자색 빨강색.
  
  })	

})