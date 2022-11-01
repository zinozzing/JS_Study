// set
const set = new Set([1, 2, 3]);
console.log(set);

// has, add, delete, clear(전부삭제), size, entries, keys, values, forEach ...
// 순회도 가능함
// 중복 불가
// 순서가 없음

//오브젝트 세트
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 5 };
const objs = new Set([obj1, obj2]);

console.log(objs);

// 퀴즈!
obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) {{…}, {…}} -> 따라서, obj는 shallow copy가 된다.

// 퀴즈!
const obj3 = { name: "🍌", price: 5 };
objs.add(obj3);
console.log(objs); // Set(3) {{…}, {…}, {…}}
