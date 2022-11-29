{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  //   console.log(y); // crash
}

const text = "global"; // 전역변수, 전역 스코프(글로벌 변수, 글로벌 스코프)
{
  const text = "inside block1"; // 지역변수, 지역 스코프(로컬 변수, 로컬 스코프)
  {
    console.log(text); // insiode block1 => 외부의 가장 근접한 블럭의 변수를 참조
  }
}
