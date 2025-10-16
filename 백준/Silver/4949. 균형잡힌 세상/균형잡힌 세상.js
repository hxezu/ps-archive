//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const filteredStr = input[i].replace(/[^()\[\]]/g, "");
  let isValid = true;
  const stack = [];

  for (const ch of filteredStr) {
    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length && stack[stack.length - 1] === "(") stack.pop();
      else {
        isValid = false;
        break;
      }
    } else if (ch === "]") {
      if (stack.length && stack[stack.length - 1] === "[") stack.pop();
      else {
        isValid = false;
        break;
      }
    }
  }
  if (stack.length) isValid = false;
  console.log(isValid ? "yes" : "no");
}
