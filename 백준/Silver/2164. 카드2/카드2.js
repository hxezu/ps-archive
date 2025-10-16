//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);

const queue = Array.from({ length: n }, (_, i) => i + 1);

let head = 0;
let tail = n;

while (tail - head > 1) {
  head++;
  queue[tail++] = queue[head++];
}
console.log(queue[head]);