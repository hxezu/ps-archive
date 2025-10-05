//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i++) {
  const strArr = input[i].trim().split("");
  const stack = [];
  let isValid = true;

  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        isValid = false;
        break;
      }
      stack.pop();
    }
  }

  console.log(isValid && stack.length === 0 ? "YES" : "NO");
}
