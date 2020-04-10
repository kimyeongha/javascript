/**
 * 
 */
$(document).ready(function(){
	//$(선택자).attr(속성명) :getter   get의 역할을 한다.
 // alert($("h5").attr("align"))    //하지만 h5의 align은 2개인데 첫번째 한개만 가져온다. 그래서 한개 일때는 attr로 해도 전혀 상관없다.
    //$(선택자).attr(속성명.값);
// $("img").attr("width","100")  //attr method 1개
 //$("img").attr({"width":"200","height":"200"}) // attr method 2 개이상
 $("img").attr("width",function(index){ //매개변수를 인덱스로 받는다. 지금 3개 잇으니까 0,1,2
	   return (index+1)*100;
	 
	 ///값을 내어서 return 한다.
 })
})