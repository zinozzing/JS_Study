// return을 명시적으로 하지 않으면 자동으로 undefined를 반환한다.

const { PureComponent } = require("react");

function add(a, b) {
  return a + b;
}

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않으면 함수를 종료하고 싶을 때
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
  return num;
}

print(3);
print(-3);
