// function runInDelay(callback, seconds) {
//   if (!callback) {
//     throw new Error("콜백 함수를 던져줘야해요!");
//   }

//   if (!seconds || seconds < 0) {
//     throw new Error("seconds must be positive");
//   }
//   setTimeout(callback, seconds * 1000);
// }

// runInDelay(() => {
//   console.log("타이머 완료!");
// }, 2);

// ==> promise 사용 !

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds must be positive"));
    }
    setTimeout(resolve(), seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료!"))
  .catch(console.error)
  .finally(() => console.log("종료"));
