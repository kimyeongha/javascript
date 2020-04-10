/**
 * 
 */
 

/**do{
	 yourText = prompt("4자이상 8자이하로 텍스트를 입력하세요")   // 지역변수는 var안적어도 됨.
     len=yourText.length
     
}while(len<4||len>8) //do.while 의 경우 거짓이라도 일단 한번은 실행 한다. 

	yourText=yourText.toUpperCase();   // 내가 소문자로 입력하여도 대문자로 바꿔줌.
  document.write(yourText.fontcolor("red"));   //문자열을 빨강색으로 바꿔라 라는 메소드 사용. 
  document.write(yourText.fontsize("20px"));
  document.write(yourText.fontsize("20px").fontcolor("blue"));
  **/

/**var anc="위 이동";
document.write(anc.anchor("top"));	
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");




var lin="top";
document.write(lin.link("#top")+"<br>");
// <a href="https://post.naver.com/viewer/postView.nhn?volumeNo=27893221">네이버 모 블로그</a>
var lin2=('https://post.naver.com/viewer/postView.nhn?volumeNo=27893221')
document.write(lin2.link("https://post.naver.com/viewer/postView.nhn?volumeNo=27893221"));

**/
/**var text="안녕하세요.안녕하세요";
  document.write(text.charAt(2)+"<br>");//0부터 시작임.  그럼 하가 출력
  document.write(text.charCodeAt(2)+"<br>"); //"하"라는 문자를 숫자 (유니코드)숫자로 바꿔줌
  document.write(String.fromCharCode(54616)+"<BR>");
  document.write(text.indexOf("세" )+"<br>");
  document.write(text.lastIndexOf("세" )); 
  **/

var Aemail ="nanako@kakao.com" ;
var Bemail ="kyh920714@gmail.com";
var Cemail="toka0628@naver.com";

    document.write(Aemail.substring(0,Aemail.indexOf("@"))+"<br>")//a사용자의 id출력
   document.write(Aemail.indexOf("@")+"<br>")
   document.write(Bemail.substring(0,9)+"<br>");//b사용자의 id출력
    document.write(Bemail.indexOf("@")+"<br>")
   document.write(Cemail.substring(0,8)+"<br>");//c사용자의 id 출력
    document.write(Cemail.indexOf("@")+"<br>")  
  