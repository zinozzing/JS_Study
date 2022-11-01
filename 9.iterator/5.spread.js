// Spread 연산자, 전개구문
// 모든 Iterator를 펼칠 수(Spread) 있다.
// 순회가 가능한 모든 것들은 촤르르르륽 펼쳐 질 수 있다
// Array, String, Map, Set, Arguments, NodeList, TypedArray, Generator, DOM Collections

function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(add(...numbers));

// Rest Parameter
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4); // [0, 1, 2, 4]

// Array Concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr = [...arr1, 7, ...arr2];
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Object
const jinho = { name: "JinHo", age: 26 };
const updated = { ...jinho, job: "s/w engineer" };
console.log(updated); // {name: "JinHo", age: 26, job: "s/w engineer"}
