// 엄격 모드 strict mode
// 리액트와 같은 프레임 워크 사용 시 엄격 모드를 사용하면 좋다.(기본으로 엄격모드)

"use strict";
// var x = 1;
// delete x; // error

function add(x) {
  var a = 2;
  b = a + x;
  console.log(this);
}

add(1);

const array = [1, 2, 3, 4, 5];
for (const num of array) {
  console.log(num);
}
// -> 엄격모드 사용 시 const나 let 등을 사용해줘야함
