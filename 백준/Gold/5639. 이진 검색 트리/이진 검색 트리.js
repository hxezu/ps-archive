//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const preorder = input.map(Number);
const postorder = [];

function buildPostorder(preStart, preEnd) {
  if (preStart > preEnd) return;

  const root = preorder[preStart];
  let idx = preStart + 1;

  while (idx <= preEnd && preorder[idx] < root) {
    idx++;
  }

  buildPostorder(preStart + 1, idx - 1);
  buildPostorder(idx, preEnd);

  postorder.push(root);
}

buildPostorder(0, preorder.length - 1);

console.log(postorder.join("\n"));
