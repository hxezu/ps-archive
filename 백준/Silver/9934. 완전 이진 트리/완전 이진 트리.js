//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const inorder = input[1].split(" ").map(Number);
const n = inorder.length;

const level = [];

function inorderToLevel(inStart, inEnd, depth) {
  if (inStart > inEnd) return;

  const mid = Math.floor((inStart + inEnd) / 2);

  if (!level[depth]) level[depth] = [];
  level[depth].push(inorder[mid]);

  inorderToLevel(inStart, mid - 1, depth + 1);
  inorderToLevel(mid + 1, inEnd, depth + 1);
}

inorderToLevel(0, n - 1, 0);

level.forEach((l) => console.log(l.join(" ")));
