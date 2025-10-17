//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const sequence = input.slice(1, N + 1);
const lowerSequence = sequence.map((v) => v.toLowerCase());
const problems = input.slice(N + 1);

const wordToIndex = new Map();
for (let i = 0; i < N; i++) {
  wordToIndex.set(lowerSequence[i], i + 1);
}

const result = [];

for (let p of problems) {
  if (!isNaN(p)) {
    // number query
    result.push(sequence[Number(p) - 1]);
  } else {
    // string query
    result.push(wordToIndex.get(p.toLowerCase()));
  }
}

console.log(result.join("\n"));
