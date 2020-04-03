/**
 * image내장객체에 대해서 알아보자
 */
function image(){
	var image=document.getElementById("target");//id가 타켓인 요소를 도큐멘트에서 가져온다.
	alert(image.src)
	image.src="image/js.png";  // 기존src에 바뀐다.
	
}