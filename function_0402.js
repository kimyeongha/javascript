/**
 * 함수선언하기 declare function.
 *
 * 함수의 종류는  (익명함수 , 선언적 함수, 가변인자함수. 내부함수. 콜백함수, 클로저)
 *
 *함수선언(선언적 함수)
 *function 함수명(매개변수) {    -매개변수는 없을 수도 있다.
 *  명령어
 *  명령어
 *  명령어
 *}
 * 함수 호출 
 * 함수명 (매개변수)
 * 
 *    1. 함수 선언  (green 버튼을 클릭하면 배경색을 green 으로 해준다.)
 */
   function changeBackground( colorName){
        document.bgColor=colorName;
          
    }
 //  2. 익명함수.
    var color=function(colorName){
    
    	document.bgColor=colorName;	
    	
    }
 //3 .가변함수.
     function sumAll(){
    	 var output=0
    	 for( var i=0 ; i<arguments.length;){
    		 output+=arguments[i];
    		 
    	 }
    	 alert(output);
    		 
    	 
    	 
    	  //argument(매개변수) 넘어 오는 데이터를 인식하는 내장함수.
    	 
     }
     
     //4.내부함수 (팀작업: 프로그램 규모가 커질수록 다른사람과 함께 프로그램을 개발하며 그와중에 충돌이 발생할수 있다.)
     
    function 외부함수명(){
    	function 내부함수명1(){
    	}
    	function 내부함수명2(){
    		
    	}
    	}
    
    
   //피타고라스 함수
    function phytagoras(width, height){
    	return Math.sqrt(square(width)+square(height)); //sqrt는 괄호값에 루트를 씌운다.
    }
    //제곱을 구하는 함수.
    function square(x){
    	return x*x;
    }
    alert(phytagoras)
    
    //5. callback 함수 (함수를 매개변수를 전달 할수 있다.)
 var callback=function(){       
	   alert("콜백함수 호출.")
   }   //익명함수인데
    function callTenTimes(callback){
    	for(var i=0; i<5, i++;){
    		callback();
    	
    	}
    }
 //6 클로저 :지역변수는 함수가 실행될때 생성되고 ,밖에서는 사라진다.
    
    function test(name){
	  var output="hello"+"name"+"..!";
	   return function(){
		    alert(output)
	   }

    }
  
//  alert(output)    //output은  함수안지역변수로서 정의 되어 있으므로 안에 있는 output과 다름.
  
  
 //7 리턴
   function add( firstnum, secondnum){
	  alert(firstnum+ secondnum)
           return firstnum+secondnum;
  }
  
  function re_add(re_firstnum,re_secondnum){
	  alert(add(re_firstnum,re_secondnum));
  }