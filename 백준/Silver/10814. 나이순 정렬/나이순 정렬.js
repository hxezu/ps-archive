//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const members = input.slice(1).map((line) => {
  const [age, name] = line.split(" ");
  return { age: Number(age), name };
});

members.sort((a, b) => a.age - b.age);

members.forEach((member) => console.log(member.age + " " + member.name));
