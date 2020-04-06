


var header = document.getElementById("header")



window.onload=function(){

     var  p = document.createElement("p");
     var p_text = document.createTextNode("hello Dom");
      p.appendChild(p_text) ;    //p 태그랑 hello Dom 이랑 연결.
      document.body.appendChild(p);  //p태그랑 body태그랑 연결.
      var img= document.createElement("img");
        document.body.appendChild(img);
      /*
        img.src="../image/hodori.jpg";
        img.width="500";
        img.height="300";*/
        
        img.setAttribute("src","image/amu.jpg")
        img.setAttribute("width","500")
        img.setAttribute("height","300")
        
        document.body.appendChild(img);
        
      //inner html 사용은 언제 하는가? 니가 한 사이트들어가서 로그인 하면 로그인 버튼이 로그아웃 버튼으로 됨. 그것을 하는것이다.!
        document.getElementById("log").innerHTML = "로그아웃" ; //innerHTML은 <><> 두개가 있어야 하기때문에  input 버튼은 안되고 <button></button>이여야함.
}

