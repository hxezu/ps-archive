//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const T = Number(input[idx++]);

for (let t = 0; t < T; t++) {
  const n = Number(input[idx++]);
  const clothes = {};

  for (let i = 0; i < n; i++) {
    const [name, type] = input[idx++].split(" ");
    clothes[type] = (clothes[type] || 0) + 1;
  }

  let combinations = 1;
  for (const type in clothes) {
    combinations *= clothes[type] + 1;
  }
  console.log(combinations - 1);
}
