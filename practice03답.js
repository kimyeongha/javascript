/**
 * 
 */
var num=prompt("숫자를 입력하세요.");

if(num%4==0){    //prompt에서 입력된 숫자는 num으로 될때 문자로 인식하지만 js에서는 문자도 숫자로 처리는 해준다. java는 안됨!! 예외는 있음 +는 안됨. +는 순수연산뿐 아니라 문자끼리연결 연산도 되기때문에
	document.write("4로 나눌수 있는 숫자잆니다.")
}

//var num=parseInt(prompt("숫자를 입력하세요"))
 //document((parseInt(문자열로된 숫자.))