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
var reply1=parseInt(prompt("첫번쨰 수를 입력하십시오.")) // 문자로 인식하기 때문이다.
var reply2=parseInt(prompt("두번째 수를 입력하십시오.")) // 문자로 인식하기때문에 parseInt 를 입력해준다.
	var sum=0;
    var temp=0;

    if( reply1>reply2){  //바꿀려면 변수 하나 더만들어야함.  reply1> 새로만든 변수 , reply2>reply1  , 새로운변수 > reply1
	   temp=reply1;
	   reply1=reply2;
	   reply2=temp;
	   
 }

for(var i=reply1;  i<=reply2; i++){     //but 첫번쨰 숫자가 두번째 숫자보다 크면 어떻게 할것인가.  ? >>첫번째 숫자와 두번째 숫자를 바꾸면 된다. 
	sum+=i
	
}
alert(sum)
	

		  
	