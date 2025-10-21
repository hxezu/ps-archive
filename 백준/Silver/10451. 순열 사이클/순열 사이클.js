//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let idx = 1;

for (let tc = 0; tc < T; tc++) {
  const n = Number(input[idx++]);
  const graph = Array(n + 1);
  const nums = input[idx++].split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    graph[i + 1] = nums[i];
  }
  const visited = Array(n + 1).fill(false);

  function dfs(node) {
    visited[node] = true;
    if (!visited[graph[node]]) dfs(graph[node]);
  }

  let cycles = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      cycles++;
    }
  }

  console.log(cycles);
}
