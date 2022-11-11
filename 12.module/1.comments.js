// 주석 Comments
// 한줄 짜리 주석을 작성할 때 씀
// TODO(유저명): 해야할 일을 작성
// ex. TODO(john): XX 기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(why)와 어떻게(how)를 설명해야 한다.
 * 단, 정말 필요한 경우에만
 */

// 외부에서 많이 쓰이는 함수 API 경우 JSDoc을 사용
/**
 * 주어진 두 수를 더한다.
 * @param {*} a
 * @param {*} b
 * @returns
 */
function add(a, b) {
  return a + b;
}
