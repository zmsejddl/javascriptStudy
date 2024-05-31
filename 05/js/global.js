// 스크립트 안에서 자유롭게 쓸 수 있는 전역 변수
var myVar = 100;	//전역 변수 선언
test();
document.write("myVar is " + myVar);

function test() { 			
	myVar = 50;	//전역 변수 선언
}