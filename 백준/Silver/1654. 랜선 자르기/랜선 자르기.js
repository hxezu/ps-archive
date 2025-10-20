//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);

let result = 0;
let short = 1;
let long = Math.max(...cables);

while (short <= long) {
  const mid = Math.floor((short + long) / 2);

  let lan = 0;
  for (let c of cables) {
    lan += Math.floor(c / mid);
  }

  if (lan >= M) {
    result = mid;
    short = mid + 1;
  } else {
    long = mid - 1;
  }
}

console.log(result);
