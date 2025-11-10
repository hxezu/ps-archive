//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input[0].split(" ").map(Number);

const boxes = [];
let idx = 1;

for (let h = 0; h < H; h++) {
  const layer = [];
  for (let n = 0; n < N; n++) {
    layer.push(input[idx++].split(" ").map(Number));
  }
  boxes.push(layer);
}

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const queue = [];
let head = 0;
for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (boxes[z][y][x] === 1) {
        queue.push([x, y, z]);
      }
    }
  }
}

while (head < queue.length) {
  const [x, y, z] = queue[head++];
  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    if (nx < 0 || ny < 0 || nz < 0 || nx >= M || ny >= N || nz >= H) continue;

    if (boxes[nz][ny][nx] === 0) {
      boxes[nz][ny][nx] = boxes[z][y][x] + 1;
      queue.push([nx, ny, nz]);
    }
  }
}

let maxDay = 0;
let hasUnripe = false;

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (boxes[z][y][x] === 0) hasUnripe = true;
      maxDay = Math.max(maxDay, boxes[z][y][x]);
    }
  }
}

if (hasUnripe) {
  console.log(-1);
} else {
  console.log(maxDay - 1);
}
