/**
 * 
 */
$(document).ready(function(){
//요소[속성=값] :속성과값이   다음과 같은 문서 객체를 선택
	//$("input[type=text]").val("안녕");
//요소[속성!=값] : 속성과 값이 다음과 같지 않은 모든 객체를 선택.
	//$("input[type!=text]").val("안녕");
//요소[속성~=값] : name 속성의 값이 text이거나 text~로 시작하는 문서 객체를 
	//$("input[name|text]").val("안녕");
//요소[속성~=값] 속성안의 값이 특정 값으로 시작 하는 문서 객체를 선택
	//$("input[class~=style]").val("안녕");
//요소[속성^=값]:속성 안의 값이 특정 값으로 시작한느 문서 객체를 선택.
	//$("input[id^=text]").val("안녕")
//요소[속성$=값]: 속성 안의 값이 특정 값을 끝나는 문서 객체를 선택.
	//$("input[id$=01]").val("안녕")
//요소[속성*=값]:속성 안의 값이 특정 값을 포함하는 문서 객체를 선택.
	$("input[type*=ex]").val("안녕")  //??
	
})
