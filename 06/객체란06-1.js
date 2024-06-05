// 객체 간단히 살펴보기
// var book = {
//     title: "자바스크립트",  //제목
//     author: "홍길동",   //저자
//     pages: 500, //쪽수
//     price: 15000    //가격
// }


// 객체의 속성과 메서드 알아보기
// navigator.vendor
// "Google Inc."

// 1분 복습
// Navigator 객체에는 브라우저가 인터넷에 연결되었는지 여부를 저장하고 있는 onLine 속성이 있습니다.
// 인터넷에 연결되어 있다면 true, 연결되지 않았다면 false 값을 가집니다.
// onLine 속성 값을 확인해 보세요.
// navigator.onLine

// window.alert("안녕하세요?")

// 1분 복습
// Window 객체에는 새 브라우저 창(새 탭)을 여는 open() 함수가 만들어져 있습니다.
// 콘솔 창에서 open() 함수를 이용해 이지스퍼블리싱 사이트를 열어 보세요
// window.open("http://www.easyspub.co.kr/")


// 객체의 인스턴스 만들기
// var now = new Date()
// now
// Fri Nov 02 2018 21:50:52 GMT+0900 (한국 표준시)

// now.toLocaleString()
// "2018. 11. 2. 오후 9:51:33"


// 내장 객체로 무작위 수 프로그램 만들기
// 무작위 수 만들기
// Math.random()

// 1부터 100사이의 무작위 수 만들기
// Math.random() * 100 +1

// 소수점 이하 버리기
// Math.floor(Math.random() * 100 +1)

// 1분 복습
// Math 객체의 함수를 사용해 1부터 50까지 숫자 중 무작위 수를 만드는 소스를 작성하세요
// Math.floor(Math.random() * 50 +1)