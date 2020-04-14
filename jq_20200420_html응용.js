/**
 * 
 */
$(document).ready(function(){
//$("img").css("width","250")
//$("img").css("height","250")
$("img").attr({"width":"250","height":"250"})
//2초마다 appendTo함수를 실행해보자.
//setInterval(함수,시간)
setInterval(function(){
	$("img").first().appendTo("body")	
},2000)


})