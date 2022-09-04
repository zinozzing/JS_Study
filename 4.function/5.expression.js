// 함수 선언문 function name() {}
// 함수 표현식 const name = function() {} -> 함수도 객체이므로 가능
let add = function (a, b) {
  return a + b;
};

// 화살표 함수 const name = () => {}
add = (a, b) => a + b;

// 생성자 함수 const object = new Function();

// IIFE(즉시 실행 함수, Immediately Invoked Function Expression)
(function run() {
  console.log("실행!");
})();
