//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const edges = input.slice(1, n);

const graph = Array.from({ length: n + 1 }, () => []);
for (const edge of edges) {
  const [u, v] = edge.split(" ");
  graph[u].push(v);
  graph[v].push(u);
}

const q = Number(input[n]);
const queries = input.slice(n + 1);
const result = [];

for (const query of queries) {
  const [t, num] = query.split(" ");
  if (t === "1") {
    result.push(graph[num].length >= 2 ? "yes" : "no");
  } else {
    result.push("yes");
  }
}

console.log(result.join("\n"));
