console.log(globalThis);
console.log(Infinity);
console.log(this);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num);");
console.log(isFinite(Infinity));

console.log(parseFloat("123.456"));
console.log(parseInt("123.456"));

// URL (URI 하위 개념)
// URI : Uniform Resource Identifier
// URL : Uniform Resource Locator
// 아스키 문자로만 구성되어야함, 한글이나 특수문자는 인코딩해서 사용해야함
const URL = "https://www.네이버.com";
const encodedURL = encodeURI(URL);
console.log(encodedURL);

const decodedURL = decodeURI(encodedURL);
console.log(decodedURL);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = "네이버.com";
const encodedPart = encodeURIComponent(part);
console.log(encodedPart);
