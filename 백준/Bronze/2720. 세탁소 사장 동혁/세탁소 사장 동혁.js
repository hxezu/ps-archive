//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

input.slice(1).forEach((line) => {
  const answer = [];
  let change = Number(line);
  answer.push(Math.floor(change / QUARTER));
  change = change % QUARTER;
  answer.push(Math.floor(change / DIME));
  change = change % DIME;
  answer.push(Math.floor(change / NICKEL));
  change = change % NICKEL;
  answer.push(Math.floor(change / PENNY));
  change = change % PENNY;

  console.log(answer.join(" "));
});
