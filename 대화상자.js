/**
 * 
 */
 /*작은창을 열어 원하는 메시지를 표시할수 있다.*/
//alert("Hello World")                   -----------------------------------------------------------1

/*위에서 확인 하도록 하는것.*/
//confirm("정말 배경이미지를 바꾸시겠습니까.")---------------------------------------------------2

var reply=confirm("정말 배경을 바꾸시겠습니까");

var result = (reply==true)? "배경이미지를 바꿔라": "배경이미지를 바꾸지마라";

document.write(result+"<br>");

var firstnum=prompt("첫번째 숫자를 입력하세요.");
var secondnum=prompt("두번째 숫자를 입력하세요.");
document.write("두수의 합은:"+firstnum+secondnum+"<br>");
/*사용자가 숫자를 아무리 입력하여도 문자열로 인식한다. -캐스팅해야한다.------------------------------3
 * 사용법 parseInt를 사용한다.  -parseInt(문자열로된 숫자)

document.write("두수의 합은" +(parseInt(firstnum)+parseInt(secondnum))+"<br>");


 

