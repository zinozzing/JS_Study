// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지?
const fruits = ["🍌", "🍎", "🍇", "🍓"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("🍎"));

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("🍎")); // true

// 추가 - 제일 뒤에 추가
fruits.push("🍈");
console.log(fruits);

// 추가 - 제일 앞에 추가
fruits.unshift("🍒");
console.log(fruits);

// 삭제 - 제일 뒤에 삭제
// 만약에 변수에 담아서 사용하면 삭제된 아이템을 사용할 수 있다.
fruits.pop();
console.log(fruits);

// 삭제 - 제일 앞에 삭제
fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 중간에 추가 또는 삭제
fruits.slice(1, 1);
console.log(fruits); // 배열 자체를 수정(업데이트)
fruits.splice(1, 0, "🍑", "🍍");
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

// 여러개의 배열을 붙여줌(concat)
const fruits2 = ["🍑", "🍍"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 배열의 순서를 거꾸로(reverse)
const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기(flat())
const arr5 = [1, 2, [3, 4, 5], 6, 7, [8, 9]];
const arr6 = arr5.flat(); // 단, flat()은 1단계까지만 펼쳐줌
console.log(arr6);
console.log(arr5.flat(2)); // 2단계까지 펼쳐줌

// 특정한 값으로 배열 채우기(fill())
const arr7 = new Array(5).fill(0);
console.log(arr7);
const arr8 = new Array(5).fill("s", 1, 3);
console.log(arr8);

// 배열을 문자열로 합하기
let text = arr7.join();
console.log(text);
text = arr7.join(" | ");
console.log(text);
