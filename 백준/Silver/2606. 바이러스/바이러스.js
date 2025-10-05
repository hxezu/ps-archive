//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const computerCnt = Number(input[0]);
const edgeCnt = Number(input[1]);
const stack = Array.from({ length: computerCnt + 1 }, () => []);

for (let i = 2; i < edgeCnt + 2; i++) {
  const [a, b] = input[i].split(" ");
  stack[a].push(b);
  stack[b].push(a);
}

const visited = Array(computerCnt + 1).fill(false);
let count = 0;

function dfs(node) {
  visited[node] = true;
  for (const next of stack[node]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

dfs(1);

console.log(count);
