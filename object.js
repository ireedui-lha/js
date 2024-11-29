let student = [
  { name: "dorjo", age: 15, gender: "male" },
  { name: "dulam", age: 30, gender: "female" },
  { name: "dondog", age: 5, gender: "male" },
  { name: "bata", age: 50, gender: "male" },
  { name: "tsetsge", age: 10, gender: "female" },
];
function people(input) {
  let man = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "male") {
      man.push(input[i]);
    }
  }
  return man;
}

function people(input) {
  let woman = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "female") {
      woman.push(input[i]);
    }
  }
  return woman;
}

console.log(people(student));
