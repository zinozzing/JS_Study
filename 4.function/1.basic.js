function add(a, b) {
  console.log("function");
  return a + b;
}

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "Kim";
let firstName = "JinHo";
console.log(fullName(firstName, lastName));
