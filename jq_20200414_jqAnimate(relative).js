/**
 * $(선택자).animate(속성들,시간,easing,콜백함수)
 */
$(document).ready(function() {
	$("div").click(function() {
		var width = $(this).css("width") // css()중 한개만 있으면 get의 개념 두개 있으면 그
		// 속성으로
		// value 값을 지정해주는것!
		var height = $(this).css("height")// 그래서 지금 같은 경우 width 와 height 에 50
		// 의 기본값으로 getter <<<<한개있으면 setter
		// 두개 있으면 getter
		$(this).animate({
			width : parseInt(width) + 50,
			height : parseInt(height) + 50
		}, "slow")// width:width+50하면 50px+50이기떄문에 문자+숫자라서 인식 문함 그래서
		// parseInt쓰거나 width:"+=50"이라고 작성

	})

})