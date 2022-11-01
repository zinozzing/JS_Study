// Iterable 하다는 것은 Symbol.iterator를 가지고 있다는 것을 의미한다.
// [Symbol.iterator]() : 이터레이터를 반환한다.
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있음
// 순회가 가능하면 무엇을 할 수 있는가? -> for .. of, spread 연산자를 사용 가능!

const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

// for .. of 의 syntaxic sugar를 제공하는 방법
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
