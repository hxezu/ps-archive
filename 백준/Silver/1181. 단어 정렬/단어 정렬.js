//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = input.slice(1);

arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a.localeCompare(b);
});

console.log(arr.join("\n"));
