//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];
const tree = {};

for (let i = 1; i <= N; i++) {
  const [root, left, right] = input[i].split(" ");
  tree[root] = [left, right];
}

let pre = "";
let inorder = "";
let post = "";

function preorder(node) {
  if (node === ".") return;
  pre += node;
  preorder(tree[node][0]);
  preorder(tree[node][1]);
}

function inorderTraversal(node) {
  if (node === ".") return;
  inorderTraversal(tree[node][0]);
  inorder += node;
  inorderTraversal(tree[node][1]);
}

function postorder(node) {
  if (node === ".") return;
  postorder(tree[node][0]);
  postorder(tree[node][1]);
  post += node;
}

preorder("A");
inorderTraversal("A");
postorder("A");

console.log(pre);
console.log(inorder);
console.log(post);
