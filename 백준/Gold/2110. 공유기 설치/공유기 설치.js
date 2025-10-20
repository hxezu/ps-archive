//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const houses = input.slice(1).map((v) => Number(v));
houses.sort((a, b) => a - b);

function canPlace(distance) {
  let count = 1;
  let last = houses[0];
  for (let i = 1; i < N; i++) {
    if (houses[i] - last >= distance) {
      count++;
      last = houses[i];
      if (count >= C) return true;
    }
  }
  return false;
}

let low = 1;
let high = houses[N - 1] - houses[0];
let answer = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  if (canPlace(mid)) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);
