//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const edges = input[1].split(" ").map(Number);
const delNode = Number(input[2]);

const graph = Array.from({ length: N }, () => []);
let rootIdx = -1;

for (let i = 0; i < N; i++) {
  if (edges[i] === -1) {
    rootIdx = i;
  } else {
    graph[edges[i]].push(i);
  }
}

let leafCnt = 0;

function dfs(node) {
  if (node === delNode) return;

  if (
    graph[node].length === 0 ||
    (graph[node].length === 1 && graph[node][0] === delNode)
  ) {
    leafCnt++;
    return;
  }

  for (const next of graph[node]) {
    if (next !== delNode) dfs(next);
  }
}

if (rootIdx !== delNode) {
  dfs(rootIdx);
}
console.log(leafCnt);
