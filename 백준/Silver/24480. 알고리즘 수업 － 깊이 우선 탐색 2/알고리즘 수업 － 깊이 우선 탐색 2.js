//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

let order = 1;
function dfs(node) {
  visited[node] = order++;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(r);

for (let i = 1; i <= n; i++) {
  console.log(visited[i]);
}
