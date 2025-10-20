//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = input[0].split("").map(Number);
nums.sort((a, b) => b - a);
console.log(nums.join(""));
