/**
 * 
 */
document.write((4+5 || 9+3)+"<br>");//피연산자가 논리값이 아니라 순수 숫자라서 4+5까지만 인식 하고 뒤에는 인식하지 아니한다.
document.write((4+5>10|| 9+3> 10)+"<br>"); //||은 or 조건이고 둘중 하나라도 true가있으면 true
document.write((4+5>10||9+3>15)+"<br>")//둘다 false 이므로 false다

document.write(  (  4+5 && 9+3)+"<br>"); //&&은  and조건이다. and조건은 두개다 true가 아니면 false가된다. 
document.write((4+5>10 && 9+3> 10)+"<br>");
document.write((4+5>10&&9+3>15)+"<br>");
document.write((4+7>10&&9+8>15)+"<br>");


/*!연산자*/
document.write(!(4+5 && 9+3)+"<br>"); //&&은  and조건이다. and조건은 두개다 true가 아니면 false가된다. 
document.write(!(4+5>10 && 9+3> 10)+"<br>");
document.write(!(4+5>10 &&9+3>15)+"<br>");
document.write(!(4+7>10 &&9+8>15)+"<br>");

