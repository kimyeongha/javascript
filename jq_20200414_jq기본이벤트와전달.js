/**
 * 
 */
$(document).ready(function(){
	$('a').click(function(event){
		   $(this).css("background","blue")
		   event.preventDefault();
		 //  event.stopPropagation();  //이게 없을때는 파란색뿐만 아니라 부모요소인 h1 도실행 되면서 클릭하면 빨강 파랑 다 같이 나옴 하지만 이거 넣으면 그 이벤트 버블링(연쇄를 차단해버림)
	})
	$("h1").click(function(){
		 $(this).css("background","red")
	})

})



