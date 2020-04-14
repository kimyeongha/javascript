/**
 * $(선택자).메소드(시간,easing,콜백함수)
 */
$(document).ready(function(){
	$("#show").click(function(){   //show 버튼 클릭하면.
		   $(".page").show("slow")
	})      //page 클래스 show 되기.
	$("#hide").click(function(){   //hide버튼 클릭하면.
		   $(".page").hide("slow",function(){alert("페이지 보여주기")}) //함수부분은 끝나면 어떻게 될지 하는 콜백 부분임
	})      //page 클래스 hide 되기.
	$("#toggle").click(function(){   //toggle버튼 클릭하면.
		   $(".page").toggle("slow")
	})      //page 클래스 toggle 되기.
	
	
	$("#slideDown").click(function(){   //slideDown 버튼 클릭하면.
		   $(".page").slideDown("slow")
	})      //page 클래스 slideDown 되기.
	$("#slideUp").click(function(){   //slideUp버튼 클릭하면.
		   $(".page").slideUp("slow",function(){alert("페이지 보여주기")}) //함수부분은 끝나면 어떻게 될지 하는 콜백 부분임
	})      //page 클래스 slideUp되기.
	$("#slideToggle").click(function(){   //slidetoggle버튼 클릭하면.
		   $(".page").slideToggle("slow")
	})      //page 클래스 slidetoggle 되기.
	
	
	$("#fadeIn").click(function(){   //fadeIn 버튼 클릭하면.
		   $(".page").fadeIn("slow")
	})      //page 클래스 fadeIn 되기.
	$("#fadeOut").click(function(){   //fadeOut버튼 클릭하면.
		   $(".page").fadeOut("slow",function(){alert("페이지 보여주기")}) //함수부분은 끝나면 어떻게 될지 하는 콜백 부분임
	})      //page 클래스 fadeOut 되기.
	$("#fadeToggle").click(function(){   //fadeToggle버튼 클릭하면.
		   $(".page").fadeToggle("slow")
	})      //page 클래스 fadeToggle 되기.
	
	
	
	
})