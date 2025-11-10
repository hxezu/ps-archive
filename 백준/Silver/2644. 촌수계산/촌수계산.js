//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const [x, y] = input[1].split(" ").map(Number);
const m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 3; i < m + 3; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(n + 1).fill(false);
let answer = -1;

function dfs(node, depth) {
  if (node === y) {
    answer = depth;
    return;
  }

  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }
}
dfs(x, 0);
console.log(answer);
