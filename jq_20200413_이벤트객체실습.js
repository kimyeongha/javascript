/**
 * 
 */
$(document).ready(function(){
	
	  $('a').first().click(function(event){
		    event.preventDefault();
	  alert("event.preventDefault();")
	  })

   $(".last").click(function(event){
	   event.stopPropagation();  //-실핼 순서 무시 하는 기능. 원래는 last third- second first 순으로 적용되지만 이것만 실행 
	   alert("last")
   })
   
   $(".first").click(function(){
	   
	   alert("first")
   })
   
   $(".second").click(function(){
	   alert("second")
   })
   
   $(".third").click(function(){
	   alert("thirds")
   })
   




})