//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let low = 0;
let high = Math.max(...trees);
let result = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  let wood = 0;
  for (let t of trees) {
    if (t > mid) wood += t - mid;
  }

  if (wood >= M) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
