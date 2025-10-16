//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const result = [];
const numArr = input[3].split(" ");

const set = new Set([...input[1].split(" ")]);

for (const num of numArr) {
  if (set.has(num)) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
