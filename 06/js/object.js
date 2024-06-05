var toyRobot = {    //toyRobot 객체를 선언한 후 속성과 함수 정의
    productId: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "Korea",
    quantity: 10,
    showStock: function() { //showStock() 함수 정의
        document.querySelector("#display").innerHTML = this.name + " 제품은" + this.quantity + "개 남아있습니다.";
    }
};

toyRobot.showStock();   //toyRobot 객체의 showStock() 함수 실행

// 1분 복습
// object.js에서 toyRobot 객체 안에 있는 price 속성 값을 가져와 알림 창에 표시하는 showPrice() 함수를 정의하세요
// showPrice: function() {
//     alert(this.name + " 제품의 가격은" + this.price + "입니다.")
// }