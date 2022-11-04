// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11(ES2020)에서 도입된 문법(?.)
// null 또는 undefined을 확인할 때

// let item = { price: 1 };
// const price = item && item.price;
// console.log(price);

// => 옵셔널 체이닝 연산자 사용

let item = { price: 1 };
const price = item?.price;
console.log(price);
