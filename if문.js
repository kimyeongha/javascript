/**
 * 
 */

//if문   
// 1.if) ex)평균이 60점이상이면 합격.
 var average=70;//평균
 var sum=110;  //총점
 if (average>=60){
	 document.write("<h1>"+"합격"+"</h1>")
	 
 }
  //2,if~else) -조건이 한개일떄
   //ex) 평균이 60점이상이면 합격, 그렇지 않으면 불합격 - 참에 의한 결과만 존재
 if(average>=60){
	 document.write("<p>"+"합격"+"</p>");
	 
 } else{
	 document.write("<p>"+"불합격"+"</p>")
	 
 }
 
 
   //ex) (총점이 120점이상이고 평균이 50점 이상)이면 합격 그렇지 않으면 불합격
if(sum>=120 && average>=60){
	 document.write("<p>"+"합격"+"</p>");
	 
} else{
	 document.write("<p>"+"불합격"+"</p>")
	 
}

 //3.if ~else  if ~else  조건이 두개일때.
 //평균이 70점이상이면 합격, 평균이 60점이상이면 보류. 그렇지않으면 불합격.
if(average>=70){ 
	document.write("<p>"+"합격"+"</p>");
	
}
else if(average>=60){
	document.write("<p>"+"보류"+"</p>");
}
else{
	document.write("<p>"+"불합격"+"</p>");
}
	


//}else if(){     게속증식 가능
	
//}else if(){
	






