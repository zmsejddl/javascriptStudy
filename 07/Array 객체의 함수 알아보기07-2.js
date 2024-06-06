// // 둘 이상의 배열을 연결하는 concat() 함수
// // var nums = ["1", "2", "3"];
// // var chars = ["a", "b", "c", "d"];
// // nums.concat(chars)  //nums 배열에 chars 배열 연결
// // chars.concat(nums)  //chars 배열에 nums 배열 연결


// // 배열 요소를 연결하는 join() 함수
// // nums.join() //구분 기호 없이 연결
// // nums.join("-")  //구분 기호("-")를 사용해 연결

// // - 1분 복습
// // myColor 배열의 요소를 colorString 같은 문자열로 표시하려면 join() 함수를 어떻게 사용해야 할까요?
// // myColor = ["red", "green", "blue"];
// // colorString = "red+green+blue";
// // 정답:
// // myColor.join("+");


// 새로운 요소를 추가하는 push() 함수와 unshift() 함수
// var nums = ["1", "2", "3"]
// nums.push("4", "5") //nums 배열 맨 끝에 "4"와 "5" 요소 추가
// nums.unshift("0")   //nums 배열 맨 앞에 "0" 요소 추가

// - 1분 복습
// double = ["2", "4", "6", "8"] 배열이 있을 때 배열 끝에 숫자 '10'을 추가하는 소스를 작성하세요
// double.push("10")


// 배열에서 요소를 추출하는 pop() 함수와 shift() 함수
// var study = ["html", "css", "javascript"]
// study.pop() //맨 마지막 요소를 추출함
// study.shift()   //첫 번째 요소를 반환함

// - 1분 복습
// double = ["2", "4", "6", "8"] 라는 배열에서 배열 맨 끝에 있는 요소를 삭제하는 소스를 작성하세요
// 정답:
// double.pop()


// 원하는 위치의 요소를 삭제하거나 추가하는 splice() 함수
// - 인수가 1개일 경우
// var numbers = [0, 1, 2, 3, 4, 5]
// numbers.splice(2)   //인덱스 2(세 번째 요소) 이후 끝까지 삭제

// - 인수가 2개일 경우
// numbers.splice(2, 1)    //인덱스 2에서 한 개 삭제

// - 인수가 3개 이상일 경우
// numbers.splice(2, 1, "js")  //인덱스 2에서 1개를 삭제하고 삭제한 자리에 새로운 요소를 추가

// - 1분 복습
// study 배열에서 "css" 요소 다음에 "web"를 추가해 보세요
// var study = ["html", "css", "web", "jquery"]
// 정답:
// study.splice(2, 0, "web")

// - 여러 개의 요소 추가
// var chars = ["a", "e", "f"]
// chars.splice(1, 0, "b", "c", "d")

// - 1분 복습
// splice() 함수를 사용해 js = ["jquery", "javascript"] 배열의 끝에 "typescript"와 "angular"를 추가해 보세요
// js.splice(2, 0, "typescript", "angular")


// 원하는 위치의 요소들을 추출하는 slice() 함수
// var colors = ["red", "green", "blue", "white", "black"]
// colors.slice(2) //인덱스 2부터 끝까지 추출
// var colors2 = colors.slice(1, 4)    //인덱스 1부터 인덱스 3까지 추출

// - 1분 복습
// 방금 연습했던 colors 배열에서 "blue"와 "white"만 추출하려면 slice() 함수를 어떻게 지정해야 할까요?
// 정답:
// colors.slice(2, 4)