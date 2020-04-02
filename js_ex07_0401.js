/**
 * 하나의 배열을 사용하여, 65, 80,25.30,75 와 같은 숫자 5개의 합과 평균을 구하라. 
 */

var array =[65,80,25,30,75];

var sum=0;

for(i=0; i<array.length;){
	
	sum=sum+array[i];
	i++;
   
}
   alert("합계는"+sum+"<br>") 
   alert("평균은"+sum/array.length)