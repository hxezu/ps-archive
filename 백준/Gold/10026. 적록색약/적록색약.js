//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);

const grid = input.slice(1).map((row) => row.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let visited = Array.from({ length: N }, () => Array(N).fill(false));

function dfs(x, y, color) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      grid[nx][ny] === color
    ) {
      dfs(nx, ny, color);
    }
  }
}

let normal = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      dfs(i, j, grid[i][j]);
      normal++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === "G") grid[i][j] = "R";
  }
}

visited = Array.from({ length: N }, () => Array(N).fill(false));

let blind = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      dfs(i, j, grid[i][j]);
      blind++;
    }
  }
}

console.log(normal, blind);
