/**
 * 
 */
//for(초기값; 조건식; 증감값)
//whilevsfor 초기값이 전역변수로 들어가나 지역변수로 들어가나 하는 냐용도 차이가 날수있다.
/*초기값;
 * while(조건식){
 *   
 *   증감값;
 *   }
 */
//var sum=0 
//i=1;
//while(i<=5){
	//sum+=i ;
	//i++ ;
	
//}
//document.write("1부터 5까지의 합은" + sum+"<br>")

	
	//for과 while 은 한번이라도 조건이 맞지 않으면 실행을 하지 않는다. 그래서 do while 을 사용하면 일단 조건이 
	//false 라도 하더라도 한번은 실행하도록 한다.
var sum=0;
i=1;
do{
	document.write("값이 6인데도 실행이 되네? ", sum +"<br>")
	sum+=i;
	 i++;
}while(i<=5)   //do while 은 초기값: do{조건}while(조건)