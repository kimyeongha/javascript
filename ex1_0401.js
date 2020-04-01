/**
Q.prmopt 함수로 문자열을 입력받아 "안녕"이 들어가 있으면 "안녕하세요 " "잘자"라고 하면 "안녕히주무세요 를 반ㄴ복 출력하고 잘있어 라고 하면 종료한다.
 *var reply=prompt("무슨말이라도 해봐")

switch(reply){
     case "안녕": document.write ("안녕하세요")
     break;
     case "잘자": document.write ("안녕히주무세요")
     break;
     ? 


}  못풀엇음

 */


 while(true){//참이면 계속 반복하는게 while 이잖아
var msg=prompt("인사말을 입력하세요")
 if(msg=="안녕"){
		 alert("안녕하세요")
 }else if(msg=="잘가"){
	 alert("안녕히주무세요")
 }else if(msg=="잘있어"){
	 break;
 }
 
 
}