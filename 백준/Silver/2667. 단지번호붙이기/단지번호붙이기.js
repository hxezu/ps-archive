//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = input[0];
const grid = input.slice(1, n + 1).map((row) => row.split("").map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

function canGo(a, b) {
  if (a < 0 || a >= n || b < 0 || b >= n) return false;
  if (visited[a][b] || grid[a][b] === 0) return false;
  return true;
}

function dfs(x, y) {
  visited[x][y] = true;
  let cnt = 1;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < 4; i++) {
    if (canGo(x + dx[i], y + dy[i])) {
      cnt += dfs(x + dx[i], y + dy[i]);
    }
  }
  return cnt;
}

let village = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (canGo(i, j)) {
      const people = dfs(i, j);
      village.push(people);
    }
  }
}

village.sort((a, b) => a - b);
console.log(village.length);
village.forEach((v) => console.log(v));
