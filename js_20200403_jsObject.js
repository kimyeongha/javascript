/**
 * 
 */
function doc(color,msg){
	document.write("<p>"+msg+"</p>")
	doccument.bgColor=color;
}
//var array=['사과','바나나', '망고 ', '딸기' ];
  // alert(typeof(array));
   
   var product ={
		   제품명:'망고'.
			유형:'당절임',
			성분:'설탕,망고'
			원선지:'필리핀'
   }
   alert(product.제품명);
    alert(product.유형);
     alert(product.성분);
      alert(product.원산지); 
      
      //  객체의 property로 사용가능한 자료형
      var object{
    	  number:123  //property
    	  string;"abc",  //property
    	  boolean:false,   //property
    	  array:[10,20,30] //property
    	  method:fuction90{}// method
      }  
    		  
   var person={
		  name:"김영하"//속성
			blood:"O형"//속성
				phone:'010-9999-1111'//속성
				eat:function(food){},	//먹는다.
					move:function(way)//움직인다.
		   
   }
   alert(person.name);
   alert(person.phone);
   alert(person.blood); //person의 속성에 접근
   alert(person.eat.("밥");)//밥이라는 문자가 food    
   alert(person.eat('물'));
   