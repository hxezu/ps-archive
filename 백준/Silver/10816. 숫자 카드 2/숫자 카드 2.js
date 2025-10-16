//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const numObj = {};

for (const num of input[1].split(" ")) {
  if (numObj[num]) {
    numObj[num]++;
  } else {
    numObj[num] = 1;
  }
}

let str = "";
for (const n of input[3].split(" ")) {
  if (numObj[n]) {
    str += numObj[n] + " ";
  } else {
    str += "0" + " ";
  }
}

console.log(str);
