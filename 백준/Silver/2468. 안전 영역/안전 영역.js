//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const grid = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const maxH = Math.max(...grid.flat());

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(startX, startY, rain, visited) {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        grid[nx][ny] > rain
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

let answer = 0;

for (let rain = 0; rain <= maxH; rain++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && grid[i][j] > rain) {
        bfs(i, j, rain, visited);
        count++;
      }
    }
  }

  answer = Math.max(answer, count);
}

console.log(answer);
