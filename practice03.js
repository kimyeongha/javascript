/**
 * 숫자를 입력받아 4로 나눌수 있는 숫자라면 "4로 나눌수 있는 숫자 입니다." 라고 작성하세요.      -나는 4의 배수라면 4로 나눌수 있는 숫자라고 생각해서 4n 이라고 생각함 
 */
    var reply=prompt("hello");   
              
     
     switch(reply%){ //비교연산자는 안됨. 순수연산자만 됨 switch는.  
     case 0:document.write("4로나눌수 있는수이다.")
      break;
     default: document.write("몰라임마");   
     break;
     }