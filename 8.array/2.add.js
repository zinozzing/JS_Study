const fruits = ["🍌", "🍎", "🍇", "🍓"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // 🍌
console.log(fruits[1]); // 🍎
console.log(fruits[2]); // 🍇
console.log(fruits[3]); // 🍓
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가와 삭제 - 좋지 않은 방식 bad!
fruits[4] = "🍑"; // 인덱스로 접근하는 방식
console.log(fruits);
