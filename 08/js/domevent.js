    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    // 1. 이벤트 유형
    // 처리할 이벤트 유형을 지정합니다.
    // 단 이 함수에서 유형을 지정할 때는 'on'을 붙이지 않고 'click'이나 'mouseover'처럼 이벤트 이름만 사용합니다.

    // 2. 함수
    // 이벤트가 발생했을 때 실행할 명령을 나열하거나 따로 함수를 만들었다면 함수 이름을 지정합니다.

    // 3. 캡처 여부
    // 이벤트를 캡처링하는지 여부를 지정하는데 생략할 수 있습니다.
    // true이면 캡처링, false이면 버블링한다는 의미인데, 기본 값은 false입니다.
    // 이벤트 캡처링을 DOM의 부모 노드에서 자식 노드로 이벤트가 전달되는 것이고, 이벤트 버블링은 DOM의 자식 노드에서 부모 노드로 이벤트가 전달되는 것입니다.
    // 이벤트 캡처링과 버블링에 대해서는 이 책에서 알아보지 않으므로 캡처 값은 기본 값 false를 넣었습니다.
    pic.addEventListener("mouseout", originPic, false); 

		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }

    // 1분 복습
    // addEventListener() 함수를 사용해서 웹 문서의 어디를 누르든지 '안녕하세요?'라는 알림 창이 나타나도록 소스를 작성하세요.
    // 웹 문서 전체를 지정하려면 document 객체를 사용합니다.
    // 정답:
    // document.addEventListener("click", function() {
    //   alert("안녕하세요?");
    // })