/* 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
직원들의 정보 : 이름, 부서이름, 한달 근무 시간
매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
정직원은 시간당 10000원, 파트타임 직원은 시간당 8000원 */

class Employee {
  constructor(name, department, workingHours, payRate) {
    this.name = name;
    this.department = department;
    this.workingHours = workingHours;
    this.payRate = payRate;
  }
  getSalary() {
    return this.workingHours * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, workingHours) {
    super(name, department, workingHours, FullTimeEmployee.PAY_RATE);
  }
  getSalary() {
    return this.workingHours * 10000;
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, workingHours) {
    super(name, department, workingHours, PartTimeEmployee.PAY_RATE);
  }
}

const Jinho = new FullTimeEmployee("김진호", "개발", 30);
const bob = new PartTimeEmployee("bob", "개발", 20);

console.log(Jinho.getSalary());
console.log(bob.getSalary());
