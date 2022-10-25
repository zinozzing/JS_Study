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
