//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push([v, w]);
  graph[v].push([u, w]);
}

let maxDist = 0;
let farNode = 0;

function dfs(node, parent, dist) {
  if (dist > maxDist) {
    maxDist = dist;
    farNode = node;
  }
  for (const [next, w] of graph[node]) {
    if (next !== parent) {
      dfs(next, node, dist + w);
    }
  }
}

dfs(1, 0, 0);

maxDist = 0;
dfs(farNode, 0, 0);
console.log(maxDist);
