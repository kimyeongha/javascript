/**
 * 폼
 * 
 */
// document. 폼이름. property(기본형식)
/*
 * document.form1.txtId.value="abcd" document.form1.action="서버주소";
 * document.form1.method="get" document.form1.area="abce"// textarea 는 벨류값을 지정할수
 * 없다. document.form1.elements[3].value="1234"; var id=
 * document.form1.txtId.value; if(id.length>=8 && id.length<=20){
 * alert("아이디사용가능") }else{ alert("아이디 사용불가능") } id.focus( );//
 * document.form1.txtId.focus();
 */
/*
 * 체크박스
 * 
 * function check(){
 * 
 * //alert("이 알림창을 보셧다면 제대로 연결된거임") var chkSoccer =
 * document.form1.soccer.checked; var chkBook = document.form1.book.checked; var
 * chkBasketball = document.form1.basketball.checked;
 * 
 * var result=""; if(chkSoccer){ //else if 는 위에가 맞으면 밑에 안가기 때문에 하면 안됨.
 * result+="축구" } if(chkBook){ result+="독서" } if(chkBasketball){ result+="농구" }
 * alert(result+"를 선택하셧네여.") }
 */
// document.폼이름.셀렉트이름.
// var selLength = document.form1.month.length;
// alert(selLength);
// var selOptions= document.form1.month.options; //배열타입으로 저장
// alert(selOptions[0].value)
var selIndex = document.form1.month.selectedIndex
// alert(selIndex)
if (selIndex <= 2) {
	alert("1사분기")

} else if (selIndex <= 5) {
	alert("2사분기")
} else if (selIndex <= 8) {
	alert("3사분기")
} else {
	alert('4사분기')
}
