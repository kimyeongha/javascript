/**
 * 
 */
$(document).ready(function(){
	 $("#all-check").change(function(){
		 //alert(this.checked)//체크여부확인
		 if(this.checked){                               //a,b,c옵션 다체크
			 $("#check-item").children().attr("checked",true);
		 }else{
			 $("#check-item").children().attr("checked",false);
		 }
	 })
})