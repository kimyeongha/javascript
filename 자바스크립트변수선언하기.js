/**
 * 
 */
//변수선언하기(var 변수명)

//var id;
 

//변수 초기화 하기 (변수명=값)  ==가 일반적으로 알고있는  equal =는 대입연산자 

//id=10;

// 변수 선언과 초기화를 한꺼번에 하기  위에꺼 처럼 따로해도 되고 같이 해도 된다.
var id=10;
//변수영역(로컬변수, 전역변수)
function test(){
	var age;                     //로컬변수  함수안에 하면 로컬  함수 밖에서 는 전역변수
	age=43;
	
	document.write(age+"<br>")
}
age=11;                                 //전역변수
test();
document.write(age+"<br>")

/*var firstnum=10;*/
var firstnum="10";
var secondnum=20;
 var result=firstnum+secondnum;
 document.write("두수의합은="+result);
 
 
