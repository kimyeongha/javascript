/**var sum=0;
var reply=prompt("숫자를 입력해주세요")
for( i=1; i<=100 ;  i++ ){
	sum+=i;
	if (i==reply){
    	
    document.write("니가 말한숫자까지의합은"+sum);
    	break;}
}
 * 
 */
var reply1=prompt("첫번쨰 수를 입력하십시오.")
var reply2=prompt("두번째 수를 입력하십시오.")
	var sum=0;

		
	
	while(reply1<=reply2){
    sum=sum+reply1
        reply1++;
		
	
	}	document.write("두합이다"+sum)
		  
	