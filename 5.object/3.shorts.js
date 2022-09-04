const x = 0;
const y = 0;
// 같다면 생략(축약) 가능
const coordinate = { x, y };
console.log("coordinate", coordinate);

function makeObject(name, age) {
  return {
    name,
    age,
  };
}
