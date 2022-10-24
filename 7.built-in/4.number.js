const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법(매우 크나 작은 수를 표기할때 사용)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 123.456;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG")); // 아랍어로 변환

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안되면 지수표기법으로

console.log(Number.EPSILON); // 0과 1사이의 나타낼 수 있는 가장 작은 숫자

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
