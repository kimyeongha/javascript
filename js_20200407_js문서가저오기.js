/**
 * 
 */

window.onload=function(){
/*var header1 =  document.getElementById("header-1");//<h1 id="header-1">header1</h1> 통채로 가져 오기.

var header2= document.getElementById("header-2")

header1.innerHTML="대치 태그입니다."
	header2.innerHTML="대치 태그입니다."
    
		var header3	=document.getElementsByName("byname")  // id와 달리 name은 하나뿐만이 아니기때문에  배열에 저장된다.
       header3[0].innerHTML="h1 대치태그 배열 0번째 내용변경"
       header3[1].innerHTML="h1 대치 태그 배열 1번쨰 내용변경"
    	   var header4  = document.getElementsByTagName("h1");  //이것도 배열타입으로 저장.
*/


/*
var header1 = document.querySelector("#header-1");
var header2 = document.querySelector("#header-2");

header1.innerHTML="대치 태그입니다."
	header2.innerHTML="대치 태그입니다."
*/

 var header2=document.getElementsByClassName(".header");
    header2[0].innerHTML="첫번쨰 h1태그입니다."
    header2[1].innerHTML="두번쨰 h1 태그입니다."
    	
   var header1=document.getElementById("header-1");
    header1.style.border="2px solid red";
    header1.style.color="orange"
    header1.style.backgroundColor="blue"; //js는  뺴기 사용 못함.*/
    
}
     