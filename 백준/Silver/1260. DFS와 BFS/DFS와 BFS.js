//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

//dfs
const visitedDfs = Array(N).fill(false);
const dfsResult = [];
function dfs(node) {
  visitedDfs[node] = true;
  dfsResult.push(node);

  for (const next of graph[node]) {
    if (!visitedDfs[next]) {
      dfs(next);
    }
  }
}

dfs(V);
console.log(dfsResult.join(" "));

//bfs
const visitedBfs = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(start) {
  const queue = [start];
  visitedBfs[start] = true;

  while (queue.length > 0) {
    const q = queue.shift();
    bfsResult.push(q);

    for (const next of graph[q]) {
      if (!visitedBfs[next]) {
        visitedBfs[next] = true;
        queue.push(next);
      }
    }
  }
}

bfs(V);
console.log(bfsResult.join(" "));
