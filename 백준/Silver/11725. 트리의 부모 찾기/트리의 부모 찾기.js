//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

const parent = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

const queue = [1];
visited[1] = true;

while (queue.length) {
  const node = queue.shift();
  for (const next of graph[node]) {
    if (!visited[next]) {
      visited[next] = true;
      parent[next] = node;
      queue.push(next);
    }
  }
}

let result = "";

for (let i = 2; i <= N; i++) {
  result += parent[i] + "\n";
}

console.log(result.trim());
