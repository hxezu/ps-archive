//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let count = 0;

const meetings = input.slice(1).map((line) => line.split(" ").map(Number));

meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let endTime = 0;
for (const [start, end] of meetings) {
  if (start >= endTime) {
    count++;
    endTime = end;
  }
}

console.log(count);
