function getBanana() {
  return new Promise(resolve => {
    setTimeout(() => resolve("🍌"), 1000);
  });
}

function getApple() {
  return new Promise(resolve => {
    setTimeout(() => resolve("🍎"), 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("No orange!!"));
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then(banana =>
    getApple() //
      .then(apple => [banana, apple])
  )
  .then(console.log);

// 프로미스를 병렬로 실행하기(Promise.all -> 한 번에 모든 Promise를 실행)
Promise.all([getBanana(), getApple()]) //
  .then(fruits => console.log("all", fruits));

// Promise.race 주어진 Promise 중 가장 먼저 값을 리턴하는 Promise를 리턴
Promise.race([getBanana(), getApple()]) //
  .then(fruit => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then(fruits => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then(fruits => console.log("all-error-settled", fruits))
  .catch(console.log);
