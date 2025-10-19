//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(n + 1).fill(false);
const dp = Array.from({ length: n + 1 }, () => [0, 0]);

function dfs(node) {
  visited[node] = true;
  dp[node][0] = 0;
  dp[node][1] = 1;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
      dp[node][0] += dp[next][1];
      dp[node][1] += Math.min(dp[next][0], dp[next][1]);
    }
  }
}

dfs(1);

console.log(Math.min(dp[1][0], dp[1][1]));
