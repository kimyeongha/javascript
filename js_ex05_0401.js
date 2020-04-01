/**var sum=1;
var i=1;
var reply=prompt("숫자를 입력해주세요")
for( var i=1; i<=100 ;  i++ ){
	sum*=i
      if(i==reply){
    	  document.write("니가 말한 숫자까지 곱은"+sum)
    	  break;
      }

}
  
 * 
 */
var reply1=prompt("첫번째 수를 입력해주세요");
var reply2=prompt("두번째 수를 입력해주세요");
   var i =reply1
   var sum=1;
   for(i=reply1; i<=reply2; i++){
	   sum=i*sum
	   if(i==reply2){
		   document.write("니가 입력한 숫자 두개의 곱"+sum)
		   break;
	   }
	   
   }
	   