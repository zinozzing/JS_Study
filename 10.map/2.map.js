const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map);

// 사이즈 확인(size)
// 존재 유무 확인(has)
// 순회(forEach), 찾기(get), 추가(set), 삭제(delete), 전부 삭제(clear)

// 오브젝트와의 큰 차이점은? => 인터페이스의 차이
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };
const obj = {
  [key]: milk,
};

console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
