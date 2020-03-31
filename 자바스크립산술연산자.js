/**
 * 
 */
var x=10;   // 첫번째 숫자  (x)에 10저장
var y=20;// 두번째 숫자  (y) 20 저장.
var z=0;
document.write("더하기="+x+y+"<br>") //왼쪽부터 차례대로 계산하기때문에 더하기는 30이라고 나오지 않음
document.write("더하기="+(x+y)+"<br>") // 더하기는=30
document.write("빼기="+(x-y)+"<br>")
document.write("곱하기="+(x*y)+"<br>")
document.write("나누기="+(x/y)+"<br>")
document.write("나머지="+(x%y)+"<br>")

var z =x++;

document.write(z+"<br>")
document.write(z+"<br>")