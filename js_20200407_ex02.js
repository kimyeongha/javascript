/**
 * 
 */

var reply =prompt("주민등록번호를 입력하세요.");
  
/* 내가한방식.
if(reply==1){
	alert("남자입니다.")
	
}else if(reply==2){
	alert("여자입니다.")
}
*/
//밑에꺼 안됨 동영상 참조
if(reply.length==14 && reply.charAt(6)=="-"){
	 if(reply.charAt(7)=="1" || reply.charAt(7))=="3"{
	document.getElementById("gender").innerHTML="남";
	
}else if(reply.charAt(7)=="2"){
	document.getElementById("gender").innerHTML="여"
}
}