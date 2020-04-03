/**
 * 
 */
    

 var today= new Date();  //오늘 날짜 2020-04-03
 var theDay= new Date(2020,03,03,16,46,30);
 
// document.write("오늘 날짜는"+today+"이고"+"내가 원하는 날짜는"+theDay+"이다")//
 
document.write("오늘 날짜 중에서 요일만 가져와라="+today.getDate( )+"<br>")
document.write("오늘 날짜 중에서 월만 가져와라="+today.getMonth( )+"<br>")
document.write("오늘 날짜 중에서 년도만 가져와라="+today.getFullYear( )+"<br>")

today.setDate(today.getDate( )+10);
today.setMonth(today.getMonth()+2);  //getFullYear 은 년도만 가져 오는것. 
today.setYear(today.getFullYear()+10);
document.write(theDay+"<br>")
document.write(today.toGMTString()+"<br>")
document.write(today.toLocaleString()+"<br>")
document.write(today.toString()+"<br>")
//today.setDate(today,getDate( )+1);

