//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const set = new Set(input[1].split(" "));
const seq = input[3].split(" ");
const result = [];

for (const num of seq) {
  if (set.has(num)) result.push("1");
  else result.push("0");
}

console.log(result.join(" "));
