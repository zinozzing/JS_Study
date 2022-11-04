// Nullish Coalescing Operator
// ES11(ES2020)에서 도입된 문법(??)
// null 또는 undefined을 확인할 때
// || falshy한 경우 설정(할당) (0, "", false, null, undefined, NaN)

let num;
console.log(num || "-1"); // num 값이 false(0)이므로 -1이 할당됨 => 버그 발생
console.log(num ?? "-1"); // num 값이 null 또는 undefined이므로 -1이 할당됨
