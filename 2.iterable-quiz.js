// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터를 만들어보자!

const multiple = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        return { value: i * 2, done: i > 10 };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
