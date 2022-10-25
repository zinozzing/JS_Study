// 배열 생성 방법
let array = new Array(2); // 사이즈 지정 가능
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

// of 연산자를 이용하여 배열 생성
array = Array.of(1, 2, 3);
console.log(array);

// 배열 리터럴을 이용하여 배열 생성
const anotherArray = [1, 2, 3];
console.log(anotherArray);

// from을 이용하여 배열 복사하기(여기서 from 연산자는 iterable 객체를 복사하므로 배열, 문자열 모두 복사가능)
array = Array.from(anotherArray);
console.log(array);

// '일반적으로' 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사(같음)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다! **
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(ex. Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array)

array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array);
// [ '안', '녕' ]
