/**
 * 
 */$(document).ready(function(){
	

  $("h1").addClass("header")
  $("h1").addClass(function(index){
	   return "header-"+index;
  })
     $("h1").removeClass(//"header-1"  매개변수가 없으면 다 addClass로 추가된 Class를 전부 삭제한다.
)
})