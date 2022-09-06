// static 정적 프로퍼티, 메서드
class Fruit {
  // 생성자: new 키워드로 객체를 만들 때 자동으로 실행되는 함수
  static MAX_FRUIT = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 사용할 수 없다
    return new Fruit("banana", "🍌");
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

// 사용 예제
Math.pow();
Number.isFinite(1);
