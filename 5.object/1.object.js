// Object를 만드는 방법
// 1. Object literal {key: value}
// 2. new Object()
// 3. Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: "apple",
  "hello-bye": "✋🏻",
  0: 1,
  ["hello-bye"]: "✋🏻",
};

//속성에 접근하는 방법
apple.name; // 마침표 표기법 dot notation
apple["hello-bye"]; // 마침표 표기법 bracket notation

// 속성 추가
apple.emoji = "🍎";

//속성 삭제
delete apple.emoji;
