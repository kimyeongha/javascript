/**
 * 
 */
//q: prompt() 함수로 문자열을 입력받아,"안녕"이면, 웹문서에 "안녕하세요" ."잘자"이면 웹문서에 "안녕히 주무세요" 둘다 아니면 , 웹문서에 "잘못입력했어요"를 출력하는 코드를 작성하세요

var result=prompt("안녕 또는 잘자를 입력해주세여.");
                             
switch(result){                                                                                                               // if(result=="안녕"){ document.write("안녕하세요"};
		case "안녕" : document.write("hi입니다.");                                                            //else if (result=="잘자"){document.write("안녕히 주무세요")};
		break;                                                                                                                     //else{ document.write("잘못입력했어요")
		case"잘자": document.write("good night입니다.");                                             //
		 break;                                                                                                                   //
		 default:                                                                                                                //
			 document.write("입력해라.");                                                                           //
         break;                                                                                                                   //
}
