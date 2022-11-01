//구조 분해 할당 Desturcturing Assignment
//데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ["🍏", "🥝", "🍓", "🍌"];
const [first, second, ...others] = fruits;
console.log(first, second, others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const jinho = { name: "JinHo", age: 26, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}

display(jinho);

const { name, age, job: occupation, pet = "강아지" } = jinho;
console.log(name, age, occupation, pet);

// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
