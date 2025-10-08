//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  const u = line[0];
  let j = 1;

  while (line[j] !== -1) {
    const v = line[j];
    graph[u].push([v, line[j + 1]]);
    graph[v].push([u, line[j + 1]]);
    j += 2;
  }
}

function dfs(start) {
  const visited = Array(n + 1).fill(false);
  let maxDist = 0;
  let farNode = start;

  function _dfs(node, dist) {
    visited[node] = true;
    if (dist > maxDist) {
      maxDist = dist;
      farNode = node;
    }
    for (const next of graph[node]) {
      if (!visited[next[0]]) {
        _dfs(next[0], dist + next[1]);
      }
    }
  }
  _dfs(start, 0);
  return [farNode, maxDist];
}

const [farthest] = dfs(1);
const [, diameter] = dfs(farthest);

console.log(diameter);
