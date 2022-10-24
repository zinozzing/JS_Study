const textObj = new String("Hello World");
const text = "Hello World";
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text.charAt(0));

// 문자열의 길이를 체크
console.log(text.length);

// 문자열의 인덱스를 체크
console.log(text.indexOf("o"));
console.log(text.lastIndexOf("o"));

// 문자의 포함여부를 체크
console.log(text.includes("o", 6));

// 특정한 문자로 시작하는지를 체크
console.log(text.startsWith("H"));
// 특정한 문자로 끝나는지를 체크
console.log(text.endsWith("d"));

// 전체를 대문자로 변환
console.log(text.toUpperCase());
// 전체를 소문자로 변환
console.log(text.toLowerCase());

// 특정한 문자를 삭제
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

// 공백제거
const space = "   Hello World   ";
console.log(space.trim());

const longText = "Hello my name is Ho. Nice to meet you.";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
