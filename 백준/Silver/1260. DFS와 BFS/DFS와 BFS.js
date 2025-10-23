//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (const [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let result = [];
function dfs(node) {
  visited[node] = true;
  result.push(node);

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(V);

const bfsVisited = Array(N + 1).fill(false);
let bfsResult = [];

function bfs(start) {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const next of graph[node]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}

bfs(V);
console.log(result.join(" "));
console.log(bfsResult.join(" "));
