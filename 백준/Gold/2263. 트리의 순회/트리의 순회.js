//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const inorder = input[1].split(" ").map(Number);
const postorder = input[2].split(" ").map(Number);

const position = new Map();
inorder.forEach((val, idx) => position.set(val, idx));

let preorder = [];
function buildPreorder(inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) return;

  const root = postorder[postEnd];
  preorder.push(root);

  const rootIndex = position.get(root);
  const leftSize = rootIndex - inStart;

  buildPreorder(inStart, rootIndex - 1, postStart, postStart + leftSize - 1);
  buildPreorder(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1);
}

buildPreorder(0, N - 1, 0, N - 1);
console.log(preorder.join(" "));
