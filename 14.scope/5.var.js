// var의 안좋은 특징
// --> 일반 코딩 방식과 어긋나서 개발하면서 멘붕 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함 -> 선언인지 (재)할당인지 구분이 안됨
something = "hello";

// 2. 중복 선언이 가능함
var poo = "poo";
var poo = "poo";
console.log(poo);

// 3. 블록 레벨 스코프 XXX !!
var apple = "사과";
{
  var apple = "사과2";
}
console.log(apple); // 사과2

// 4. 함수 레벨 스코프만 지원
function example() {
  var apple = "사과";
}
console.log(apple); // error
