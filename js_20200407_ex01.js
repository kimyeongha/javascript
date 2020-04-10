//문제.1 문서 객체로 현재시간을 표시하는 시계를 만들어 보세요.
//setinterval()함수를 사용하여 1초마다 시간을 바뀌게 합니다.


/*var ex1= new Date()
document.write(ex1)
setInterval(function(){ document.write(ex1) }, 1000);*/

window.onload=function(){
	var clock=document.getElementById("clock");

	setInterval(function(){
		clock.innerHTML=new Date();
	},1000)
	

 

}