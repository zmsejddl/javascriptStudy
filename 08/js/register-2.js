// 참가 신청 명단 프로그램 개선하기

// 맨 위에 이름 추가하기
function newRegister() {
    var newP = document.createElement("p"); 
    var userName = document.querySelector("#userName"); 
    var newText = document.createTextNode(userName.value);  
    newP.appendChild(newText);  
    // 이름 삭제하기
    var delBttn = document.createElement("span");   //새 span 요소 만들기
    var delText = document.createTextNode("X"); //새 텍스트 노드 만들기
    delBttn.setAttribute("class", "del");   //버튼에 class 속성 설정하기
    delBttn.appendChild(delText);   //텍스트 노드를 button 요소의 자식 요소로 추가하기
    newP.appendChild(delBttn);  //del 버튼을 p 요소의 자식 요소로 추가하기
    var nameList = document.querySelector("#nameList"); //p 요소를 #nameList의 자식 요소로 만들기
    nameList.insertBefore(newP, nameList.childNodes[0]);    //p 요소를 #nameList 맨 챂에 추가하기 
    userName.value = "";   
    
    var removeBttns = document.querySelectorAll(".del");

    for(var i = 0; i < removeBttns; i++) {  //removeBttns에 있는 요소 전체를 반복
        removeBttns[i].addEventListener("click", function() {
            //i번째 버튼을 눌렀을 때 실행할 함수 선언
            if(this.parentNode.parentNode) {    //현재 노드(this)의 부모 노드의 부모 노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode);    //'현재 노드(this)의 부모 노드의 부모 노드'를 찾아 '현재 노드(this)의 부모 노드(p 노드)' 삭제
            }
        })
    }
}