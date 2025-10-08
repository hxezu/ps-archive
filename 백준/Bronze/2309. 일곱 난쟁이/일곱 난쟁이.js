//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let inputArr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/)
  .map(Number);

let dwarfs = Array(7);

function dfs(sum, cnt, idx, selected) {
  if (sum === 100 && cnt === 7) {
    selected.sort((a, b) => a - b);
    selected.forEach((s) => console.log(s));
    process.exit(0);
  }

  if (sum > 100 || cnt > 7) return;

  for (let i = idx; i < inputArr.length; i++) {
    dfs(sum + inputArr[i], cnt + 1, i + 1, [...selected, inputArr[i]]);
  }
}

dfs(0, 0, 0, []);
