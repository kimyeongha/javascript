/*
 * 변수는 중복시 최후의하나 밖에 지정하지 못한다. var a= 10, 20,30,40 , 50. 적으면 a =50;
 * 하지만 배열을 사용할경우 많이 지정가능함.
 * var a=[10,20,30,40,50,];
 *  document.write(a) // 10,20.30.40.50.
 * 
 * document.write(a[2])//30이나온다   [n]번째 숫자가 나온다. 0번부터 시작
 * 
 * 
 
 * */
 var a=[10, 20,30,40,50];
document.write("a배열의 길이"+a.length+"<br>");  // a.length는 배열의 길이를 말함.
 
 for(var i =0 , i<a.length; i++){
	 document.write(a[i]+"<br>")    //a[1] 이면 =10 a[2] 이면 =20  a[3] 이면 30 a[n]이면 배열의 n번째를 출력 
 }                                                            // a. length 로 하면 몇줄이더간에 늘어나면 배열의 길이도 출력이 되서 할수있음.
  	