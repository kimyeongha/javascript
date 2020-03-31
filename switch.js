

//switch 문   switch- case-break 3단계 가 셋트로 다나와야함 만약 break가없으면 해당 되더라도 끝까지 진행함.
   var gender=1;
   
switch(gender){
		case 1:    document.write("<p>"+"남자"+"</p>");//케이스가 1이면   남자
		break;   //1번선택하면 1번에서 끝
		case 2:  document.write("<p>"+"남자"+"</p>");//케이스가 2면 여자
	    break;  //2번에서 끝나면 2번에서 끝! break 꼭 넣어줘야함.
		 default :
			 document.write("<p>"+"성별을 입력하세요."+"</p>");//
			
	    break;
}