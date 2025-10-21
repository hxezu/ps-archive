//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1);

const graph = Array.from({ length: N + 1 }, () => []);

for (const edge of edges) {
  const [u, v] = edge.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsResult = [];
const visitedDfs = Array(N + 1).fill(false);
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

const bfsResult = [];
function bfs(start) {
  const visitedBfs = Array(N + 1).fill(false);
  const queue = [start];

  visitedBfs[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const neighbor of graph[node]) {
      if (!visitedBfs[neighbor]) {
        visitedBfs[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

bfs(V);
console.log(bfsResult.join(" "));
