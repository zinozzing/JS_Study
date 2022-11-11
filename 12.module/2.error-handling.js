// try catch finally
function readFile(path) {
  // 에러를 발생시키는 코드
  throw new Error("파일 경로를 찾을 수 없음");
  return "파일의 내용";
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = "기본내용";
  } finally {
    console.log("성공하든 실패하든 무조건 실행");
  }
}

const result = processFile("경로");
