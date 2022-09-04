const log = num => console.log(num);
const doubleAndLog = num => console.log(num * 2);

function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

iterate(5, log);
iterate(5, doubleAndLog);

setTimeout(() => {
  console.log("1초 경과");
}, 1000);
