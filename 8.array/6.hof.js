const fruits = ["π", "π", "π", "π"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ===

// λ°°μ΄μ λΉκΈλΉκΈ λλ©° μνλ κ²(μ½λ°±ν¨μ)μ ν  λ ... => forEach
fruits.forEach(value => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: "π₯", price: 2 };
const item2 = { name: "πͺ", price: 3 };
const item3 = { name: "π", price: 4 };
const products = [item1, item2, item3];
let found = products.find(value => value.name === "πͺ");
console.log(found);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex(value => value.name === "πͺ");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ (νλλΌλ)μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈν  λ
result = products.some(value => value.price < 3);
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λͺ¨λ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈν  λ
result = products.every(value => value.price < 3);
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ μ‘°κ±΄μ λ§κ² νν°λ§ν΄μ μλ‘μ΄ λ°°μ΄μ λ§λ€ λ
result = products.filter(value => value.price < 3);
console.log(result);

// map: λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);

// flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€
result = ["a", "b", "c"].flatMap(item => [item, item.toUpperCase()]);
console.log(result);

// sort: λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ["c", "a", "b"];
texts.sort();
console.log(texts);
const numbers = [1, 3, 2, 10]; // fail... 10 λλ¬Έμ γγ
numbers.sort((a, b) => a - b); // ν΄κ²°λ²! <0 aκ° μμΌλ‘ μ λ ¬
console.log(numbers);

// reduce: λ°°μ΄μ μμ΄νλ€μ νλλ‘ μ€μ¬μ μ΄λ€ κ°μ λ§λ€ λ
result = [1, 2, 3, 4, 5].reduce((sum, value) => sum + value, 0);
console.log(result);
