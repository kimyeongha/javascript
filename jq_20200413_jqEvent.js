/**
 * 
 */
$(document).ready(function(){
	//$("선택자").on(이벤트이름, 선택자, 데이터,리스너)
//$("h1").one("click",function(){
	//      $(this).html(function(index,html){
	  //	    return html+ "+";
	    //   })	
//	})//클릭이벤트끝
	
	
	//	$("h1").on({mouseenter:function(){$(this).addClass("reverse")},         //마우스를 올렷을때
		//                     mouseleave:function(){$(this).removeClass("reverse")}     })         //마우스를 땟을떄 
		    /*                 
 //2. 이벤트 연결 메소드를 사용했을때.
		    //    $("선택자").이벤트 메소드(function(){})  
		   //클릭이벤트  hover이벤트를 사용하여 1번과 같은 효과를 내보도록한다.
		                 
		                     $("h1").click(function(){
		                      $(this).html(function(index,html){
		                    	    return html+"+";
		                      })
		                      
	})  //클릭하면 +나오는것
	*/
	$("h1").hover(function(){
	                          $(this).addClass("reverse");
	                          },
	                          function(){
	    	                  $(this).removeClass("reverse");	    	               
	                          })
                            
  //  3.이벤트 연결제거(off)
	              //            $("h1").click(function(){
	                //        	  $(this).html("click");
	                //              alert("이벤트가 발생하였습니다.")
	                        //                           $(this).off();
	              //            })
	                        
	                          
	                          
	                          //      $(this).off();
	


})
		      