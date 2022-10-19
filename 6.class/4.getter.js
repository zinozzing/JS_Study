// 접근자 프로퍼티(Accessor Property)를 정의하는 방법
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("진호", "김");

console.log(student.fullName);
student.fullName = "김철수";
