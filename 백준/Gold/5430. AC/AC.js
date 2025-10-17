//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input[0];
let line = 1;

for (let t = 0; t < T; t++) {
  const funcs = input[line++].trim();
  const n = Number(input[line++]);
  let arr = input[line++]
    .trim()
    .slice(1, -1)
    .split(",")
    .filter((v) => v !== "");

  if (n === 0) arr = [];

  let front = 0;
  let back = n - 1;
  let reversed = false;
  let error = false;

  for (const f of funcs) {
    if (f === "R") {
      reversed = !reversed;
    } else if (f === "D") {
      if (front > back) {
        error = true;
        break;
      }
      if (!reversed) front++;
      else back--;
    }
  }

  if (error) {
    console.log("error");
  } else {
    const result = [];
    if (!reversed) {
      for (let i = front; i <= back; i++) result.push(arr[i]);
    } else {
      for (let i = back; i >= front; i--) result.push(arr[i]);
    }
    console.log(`[${result.join(",")}]`);
  }
}
