// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체를 통해 확인 가능
// 매개변수 기본값 Default Parameters
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

// Rest 매개변수 (Rest Parameters)
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
