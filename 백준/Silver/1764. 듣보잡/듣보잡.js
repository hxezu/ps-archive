//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nonHeard = new Set(input.slice(1, N + 1));
const nonSeen = input.slice(N + 1);

const result = [];

for (const person of nonSeen) {
  if (nonHeard.has(person)) {
    result.push(person);
  }
}

result.sort();

console.log(result.length);
console.log(result.join("\n"));
