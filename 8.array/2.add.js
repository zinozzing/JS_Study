const fruits = ["π", "π", "π", "π"];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]); // π
console.log(fruits[1]); // π
console.log(fruits[2]); // π
console.log(fruits[3]); // π
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°μ μ­μ  - μ’μ§ μμ λ°©μ bad!
fruits[4] = "π"; // μΈλ±μ€λ‘ μ κ·Όνλ λ°©μ
console.log(fruits);
