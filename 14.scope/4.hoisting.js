print(); //  호이스팅에 의해 함수 선언문이 블록의 최상단으로 끌어올려짐

function print() {
  console.log("print");
}

// 변수와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
let hi = "hi";

let x = 1;
{
  console.log(x); // error
  let x = 2;
}
