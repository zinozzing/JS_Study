// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않은 방법이다
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 한다
// 원시 값 - 값에 의한 복사
// 객체 값 - 참조에 의한 복사(메모리주소)
function display(num) {
  num = 5; // bad!!
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "new name"; // bad!! 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 XXXX!!!
  console.log(obj);
}

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록
  return { ...obj, name: "Bob" }; // good!! 새로운 오브젝트를 만들어서 반환
}
