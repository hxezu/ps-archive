//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const coordinates = input.slice(1).map((line) => line.split(" ").map(Number));

coordinates.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

coordinates.forEach((coordinate) =>
  console.log(coordinate[0] + " " + coordinate[1])
);
