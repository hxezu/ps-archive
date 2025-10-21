//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let idx = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);
  const lettuce = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    lettuce[y][x] = 1;
  }

  let wormCount = 0;

  function bfs(sy, sx) {
    const queue = [[sy, sx]];
    lettuce[sy][sx] = 0;

    while (queue.length > 0) {
      const [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny >= 0 && ny < N && nx >= 0 && nx < M && lettuce[ny][nx] === 1) {
          lettuce[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (lettuce[y][x] === 1) {
        wormCount++;
        bfs(y, x);
      }
    }
  }
  console.log(wormCount);
}
