const fruits = ["🍌", "🍓", "🍇", "🍓"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ===

// 배열을 빙글빙글 돌며 원하는 것(콜백함수)을 할 때 ... => forEach
fruits.forEach(value => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🥛", price: 2 };
const item2 = { name: "🍪", price: 3 };
const item3 = { name: "🍙", price: 4 };
const products = [item1, item2, item3];
let found = products.find(value => value.name === "🍪");
console.log(found);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex(value => value.name === "🍪");
console.log(result);

// 배열의 아이템들이 부분적(하나라도)으로 조건(콜백함수)에 맞는지 확인할 때
result = products.some(value => value.price < 3);
console.log(result);

// 배열의 아이템들이 모두 조건(콜백함수)에 맞는지 확인할 때
result = products.every(value => value.price < 3);
console.log(result);

// 배열의 아이템들을 조건에 맞게 필터링해서 새로운 배열을 만들 때
result = products.filter(value => value.price < 3);
console.log(result);

// map: 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);

// flatmap: 중첩된 배열을 쫘악 펴줌
result = ["a", "b", "c"].flatMap(item => [item, item.toUpperCase()]);
console.log(result);

// sort: 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ["c", "a", "b"];
texts.sort();
console.log(texts);
const numbers = [1, 3, 2, 10]; // fail... 10 때문에 ㅜㅜ
numbers.sort((a, b) => a - b); // 해결법! <0 a가 앞으로 정렬
console.log(numbers);

// reduce: 배열의 아이템들을 하나로 줄여서 어떤 값을 만들 때
result = [1, 2, 3, 4, 5].reduce((sum, value) => sum + value, 0);
console.log(result);
