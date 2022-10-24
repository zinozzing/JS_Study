// 현재시간 출력(설정) - UTC기준(협정 세계시, 1970년 1월 1일 0시 0분 0초 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());

// 특정한 시간 지정
console.log(new Date("2022-01-01"));

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0이 1월 11이 12월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0이 일요일 6이 토요일

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 표준
console.log(now.toLocaleString("ko-KR"));
