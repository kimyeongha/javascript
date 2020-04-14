/**
 * 
 */
$(document).ready(function(){
/*	
	 $("p").on("myevent",function(event,data1,data2){
		$("p").text("input data : "+ "data1","data2)
	 })
	
	$(":button").click(function(){
		
	$("p").trigger("myevent",["one","two"])
	})
*/
 $("h1").click(function(){
	  $(this).html(function(index,html){
		  return html+"★";
	  });
 })
  setInterval(function(){
	  $("h1").last().trigger("click");
  },1000);
})