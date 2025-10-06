//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const probs = input.slice(1).map((v) => v / 100);
const visited = Array.from({ length: 30 }, () => Array(30).fill(false));
let result = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y, depth, prob) {
  if (depth === N) {
    result += prob;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (visited[nx][ny]) continue;

    visited[nx][ny] = true;
    dfs(nx, ny, depth + 1, prob * probs[i]);
    visited[nx][ny] = false;
  }
}

visited[15][15] = true;
dfs(15, 15, 0, 1);

console.log(result);
