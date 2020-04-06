/**
 * 
 */
// 알림창 (alert)
alert("window 객체의 메소드 입니다. ")

//팝업창(open)

//window.open("popup.html","팝업창","width=300px, height=400px,location=no,resizeable=yes,toolbar=yes,scrollbars=yes");//toolbar scroll 등은 크롬에서는 적용안됨.

//window.close("7일간 안보기")


/*var popup= window.open("popup.html","알려드립니다.","width=400px,height=400px");
popup.moveTo(200,200);

setInterval(function(){
	popup.moveBy(10,10);
},1000)*/

var popup=window.open("","","width=200,height=200");

setInterval(function(){
	popup.moveBy(300,300);
},5000)  // 5초후에  300, 300  이동하여라

setInterval(function(){
	popup.resizeBy(300,300);
},5000)  // 5초후에  300, 300  이동하여라
