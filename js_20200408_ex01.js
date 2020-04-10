/**
 * 이미지를 클릭했을떄 이미지가 체인지 되는 함수 선언을 해보겠습니다.
 */
function setImage(ImageName){
  //alert("이미지 클릭"); //클릭했을떄 제대로 연결이 됬는지 확인
var papa = 	document.getElementById("target");
       papa.src="image/"+ImageName;
      // image.width:"500px";
       //image.height="500px";
          
}