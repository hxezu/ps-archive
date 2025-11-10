//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let [x, y, dir] = input[1].split(" ").map(Number);

const grid = input.slice(2, N + 2).map((line) => line.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let count = 0;
while (true) {
  if (grid[x][y] === 0) {
    grid[x][y] = 2;
    count++;
  }

  let found = false;
  for (let i = 0; i < 4; i++) {
    dir = (dir + 3) % 4;
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && grid[nx][ny] === 0) {
      x = nx;
      y = ny;
      found = true;
      break;
    }
  }

  if (found) continue;

  const backDir = (dir + 2) % 4;
  const bx = x + dx[backDir];
  const by = y + dy[backDir];
  if (grid[bx][by] === 1) break;

  x = bx;
  y = by;
}

console.log(count);
