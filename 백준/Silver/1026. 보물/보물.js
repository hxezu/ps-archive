//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let minSum = 0;

A.forEach((a, i) => {
  minSum += a * B[i];
});

console.log(minSum);
