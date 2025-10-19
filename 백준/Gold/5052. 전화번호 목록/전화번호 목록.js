//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const t = Number(input[idx++]);

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(input[idx++].trim());
  }

  numbers.sort();

  let consistent = true;
  for (let i = 0; i < n - 1; i++) {
    if (numbers[i + 1].startsWith(numbers[i])) {
      consistent = false;
      break;
    }
  }

  console.log(consistent ? "YES" : "NO");
}
