//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.empty()) return "-1";
    return this.items.pop();
  }

  top() {
    if (this.empty()) return "-1";
    return this.items[this.items.length - 1];
  }

  empty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
const result = [];

for (let i = 1; i < n + 1; i++) {
  const [op, num] = input[i].split(" ");
  if (op === "push") {
    stack.push(Number(num));
  } else if (op === "top") {
    result.push(stack.top());
  } else if (op === "size") {
    result.push(stack.size());
  } else if (op === "empty") {
    result.push(stack.empty() ? "1" : "0");
  } else if (op === "pop") {
    result.push(stack.pop());
  }
}

console.log(result.join("\n"));
