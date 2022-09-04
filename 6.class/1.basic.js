// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스(ES6+)

class Fruit {
  // 생성자: new 키워드로 객체를 만들 때 자동으로 실행되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스다
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
apple.display();
orange.display();

// obj는 just 객체
const obj = { name: "JinHo" };
