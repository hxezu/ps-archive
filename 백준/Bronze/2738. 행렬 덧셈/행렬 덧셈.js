//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const matrix1 = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));
const matrix2 = input
  .slice(1 + n, n * 2 + 1)
  .map((line) => line.split(" ").map(Number));

let result = [];

for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(matrix1[i][j] + matrix2[i][j]);
  }
  console.log(row.join(" "));
}
