/**
 * 
 */

$(document).ready(function(){
    $(".outer").mouseover(function(){
    	$("body").append("<h1>Mouseover</h1>");
    	
    }).mouseenter(function(){
    	$("body").append("<h1>MouseEnter</h1>");
    })
    

})