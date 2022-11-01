// Generator를 사용하면 좀 더 쉽게 구현할 수 있다! Generator는 function* 키워드를 사용한다.
// const multiple = {
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next() {
//         i++;
//         return { value: i * 2, done: i > 10 };
//       },
//     };
//   },
// };

// for (const num of multiple) {
//   console.log(num);
// }

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (e) {
    console.log(e);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw("error!");

next = multiple.next();
console.log(next.value, next.done);
