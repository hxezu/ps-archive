//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let count = 0;

for (let i = 1; i < n + 1; i++) {
  let isGroupWord = true;
  const wordSet = new Set();
  for (let j = 0; j < input[i].length; j++) {
    const ch = input[i][j];
    if (j !== 0 && ch != input[i][j - 1] && wordSet.has(ch)) {
      isGroupWord = false;
      break;
    }
    wordSet.add(ch);
  }
  if (isGroupWord) count++;
}

console.log(count);
