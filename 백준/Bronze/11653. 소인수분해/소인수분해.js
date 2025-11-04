//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const result = [];
let num = n;
for (let i = 2; i * i <= num; i++) {
  while (num % i === 0) {
    result.push(i);
    num /= i;
  }
}

if (num > 1) result.push(num);

console.log(result.join("\n"));
