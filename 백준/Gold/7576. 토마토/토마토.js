//var input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const box = input.slice(1).map((line) => line.split(" ").map(Number));
const N = box.length;
const M = box[0].length;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const queue = [];

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (box[y][x] === 1) queue.push([y, x]);
    }
  }

  let idx = 0;
  while (idx < queue.length) {
    const [y, x] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && box[ny][nx] === 0) {
        box[ny][nx] = box[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  let maxDays = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (box[y][x] === 0) return -1;
      maxDays = Math.max(maxDays, box[y][x]);
    }
  }
  return maxDays - 1;
}

console.log(bfs());
