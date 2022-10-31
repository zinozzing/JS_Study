// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replaceStrawberry(fruits, from, to) {
  const replaced = Array.from(fruits);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const fruits = ["🍌", "🍓", "🍇", "🍓"];
newFruits = replaceStrawberry(fruits, "🍓", "🥝");
console.log(newFruits);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function countFruits(fruitArray, fruit) {
  let count = 0;
  for (let i = 0; i < fruitArray.length; i++) {
    if (fruitArray[i] === fruit) {
      count++;
    }
  }
  return count;
}

const fruitArray = ["🍌", "🥝", "🍇", "🥝"];
const count = countFruits(fruitArray, "🥝");
console.log(count);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function getIntersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

const fruits1 = ["🍌", "🥝", "🍇"];
const fruits2 = ["🍌", "🍓", "🍇", "🍓"];
const intersection = getIntersection(fruits1, fruits2);
console.log(intersection);
