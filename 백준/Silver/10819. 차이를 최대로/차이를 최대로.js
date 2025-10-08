//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let maxSum = 0;
const visited = Array(n).fill(false);

function calculateSum(numArr) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(numArr[i] - numArr[i + 1]);
  }
  return sum;
}

function dfs(numArr, cnt) {
  if (cnt === n) {
    maxSum = Math.max(calculateSum(numArr), maxSum);
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...numArr, numbers[i]], cnt + 1);
      visited[i] = false;
    }
  }
}

dfs([], 0);

console.log(maxSum);
