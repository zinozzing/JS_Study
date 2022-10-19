// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   play() {
//     console.log("play");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("yellow");
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모의 constructor를 호출
    this.ownerName = ownerName;
  }
  play() {
    console.log("play");
  }
  // 오버라이딩 (overriding)
  eat() {
    console.log("dog eat");
  }
}

const dog = new Dog("red", "김진호");
console.log(dog);
dog.play();
