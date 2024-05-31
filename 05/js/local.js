// 함수 안에서만 쓸 수 있는 지역 변수
var myVar = 100;	//전역 변수 선언
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50;	//지역 변수 선언
}