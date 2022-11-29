// 코드블럭: {}, if(), for(), while(), function(){} 등
// 블럭 외부에서는 블럭 내부의 변수에 접근(참조)할 수 없다.
// 함수 외부에서는 함수 내부의 변수(매개변수 포함)에 접근(참조)할 수 없다.
{
  const a = "a";
  console.log(a); // a
}

const b = "b";
// console.log(a); // crash
