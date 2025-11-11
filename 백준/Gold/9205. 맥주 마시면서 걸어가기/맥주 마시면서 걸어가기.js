//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
//테스트케이스 개수
const t = Number(input[idx++]);

function distance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const locations = [];
  for (let j = 0; j < n + 2; j++) {
    locations.push(input[idx++].split(" ").map(Number));
  }

  const visited = Array(n + 2).fill(false);
  const queue = [locations[0]];
  visited[0] = true;
  let happy = false;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === locations[n + 1][0] && y === locations[n + 1][1]) {
      happy = true;
      break;
    }

    for (let j = 1; j < n + 2; j++) {
      if (!visited[j] && distance([x, y], locations[j]) <= 1000) {
        visited[j] = true;
        queue.push(locations[j]);
      }
    }
  }
  console.log(happy ? "happy" : "sad");
}
