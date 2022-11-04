// 논리연산자 Logical Operators
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "JinHo" };

if (obj1 && obj2) {
  console.log("둘다 true!");
}

let result = obj1 && obj2;

console.log(result);

// 단축평가 활용 예시
// 조건이 true일 때 && 무언가를 해야할 경우
// 조건이 false일 때 || 무언가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("No owner!");
  }
  animal.owner = "바뀐주인";
}

function makeNewOwner(animal) {
  animal.owner = "새주인";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined 체크 => && 연산자 사용
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter => 전달하지 않거나, undefined를 전달할 때 기본값을 설정
// || 값이 false일 때 무언가를 해야할 경우
function print(msg) {
  const text = msg || "기본값";
  console.log(text);
}
print();
