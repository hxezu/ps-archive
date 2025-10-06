//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
const N = input[0];

const stack = [];

for (let i = 1; i <= N; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

console.log(stack.reduce((a, b) => a + b, 0));
