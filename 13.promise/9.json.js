// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
// stringfy: 오브젝트를 JSON 문자열로 변환
// parse: JSON 문자열을 오브젝트로 변환

const JinHo = {
  name: "JinHo",
  age: 26,
  eat: () => {
    console.log("eat");
  },
};

// 직렬화(serialize) : 객체를 문자열로 변환
const json = JSON.stringify(JinHo);
console.log(json); // 문자버전
console.log(JinHo); // 오브젝트 버전

// 역직렬화(deserialize) : 문자열을 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // 오브젝트 버전
