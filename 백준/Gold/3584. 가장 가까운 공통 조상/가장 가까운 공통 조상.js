//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let t = Number(input[0]);

let idx = 1;

for (let tc = 0; tc < t; tc++) {
  const n = Number(input[idx++]);
  const parent = Array(n + 1).fill(0);

  for (let i = 0; i < n - 1; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    parent[b] = a;
  }

  const [node1, node2] = input[idx++].split(" ").map(Number);
  const ancestors = new Set();

  let cur = node1;
  while (cur) {
    ancestors.add(cur);
    cur = parent[cur];
  }

  let result = node2;
  while (!ancestors.has(result)) {
    result = parent[result];
  }

  console.log(result);
}
