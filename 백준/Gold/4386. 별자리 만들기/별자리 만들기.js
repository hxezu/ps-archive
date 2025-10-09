//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const points = [];

for (let i = 1; i < n + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

function dist(i, j) {
  const dx = points[i][0] - points[j][0];
  const dy = points[i][1] - points[j][1];
  return Math.hypot(dx, dy);
}

const INF = 1e18;
const visited = Array(n).fill(false);
const minDist = Array(n).fill(INF);
minDist[0] = 0;
let total = 0;

for (let k = 0; k < n; k++) {
  let u = -1;
  let best = INF;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && minDist[i] < best) {
      best = minDist[i];
      u = i;
    }
  }

  visited[u] = true;
  total += best;

  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      const d = dist(u, v);
      if (d < minDist[v]) {
        minDist[v] = d;
      }
    }
  }
}

console.log(total.toFixed(2));
