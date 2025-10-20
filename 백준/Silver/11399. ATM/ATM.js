//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let sum = 0;
let totalSum = 0;

for (let i = 0; i < n; i++) {
  sum += arr[i];
  totalSum += sum;
}

console.log(totalSum);
