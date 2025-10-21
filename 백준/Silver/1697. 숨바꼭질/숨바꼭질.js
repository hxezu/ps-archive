//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

function bfs(start, target) {
  const MAX = 100000;
  const visited = Array(MAX + 1).fill(false);

  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length > 0) {
    const [pos, steps] = queue.shift();

    if (pos === target) return steps;

    const moves = [pos - 1, pos + 1, pos * 2];

    for (const next of moves) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, steps + 1]);
      }
    }
  }
  return -1;
}

console.log(bfs(N, K));
