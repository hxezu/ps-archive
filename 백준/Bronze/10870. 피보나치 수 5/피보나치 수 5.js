//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0]);

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(num));
