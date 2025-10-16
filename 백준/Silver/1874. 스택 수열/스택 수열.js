//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const seq = input.slice(1).map(Number);

const stack = [];
const result = [];
let current = 1;

let isValid = true;

for (const target of seq) {
  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    isValid = false;
    break;
  }
}

console.log(isValid ? result.join("\n") : "NO");
