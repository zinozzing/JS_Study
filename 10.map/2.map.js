const map = new Map([
  ["key1", "๐"],
  ["key2", "๐"],
]);
console.log(map);

// ์ฌ์ด์ฆ ํ์ธ(size)
// ์กด์ฌ ์ ๋ฌด ํ์ธ(has)
// ์ํ(forEach), ์ฐพ๊ธฐ(get), ์ถ๊ฐ(set), ์ญ์ (delete), ์ ๋ถ ์ญ์ (clear)

// ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์ ์? => ์ธํฐํ์ด์ค์ ์ฐจ์ด
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "๋ง์๋ ์ฐ์ " };
const obj = {
  [key]: milk,
};

console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
