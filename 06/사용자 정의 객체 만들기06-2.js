// 리터럴 표기법을 사용해 객체를 만드는 방법
// var book = {    
//     title: "자바스크립트",
//     author: "고쌤",
//     pages: 500,
//     price: 15000,
//     info: function() {
//         alert(this.title + "책의 분량은 " + this.pages + "쪽입니다.");
//     }
// }
// book - 객체
// author - 속성 이름
// "고쌤" - 속성 값
// info - 함수 이름

// 속성 값 가져오기
// book.title
// book.info()

// 속성 추가
// book.field = "IT"


// 생성자 함수를 사용해 객체를 만드는 방법
// function Book(author, pages, price, title) {
//     this.author = author;
//     this.pages = pages;
//     this.price = price;
//     this.title = title;
// }

// jsBook = new Book("홍길동", 500, 15000, "자바스크립트") //인스턴스 만들기
// jsBook.title    //jsBook 객체에서 속성 값 확인하기