//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);

    if (!this.size) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.empty()) return -1;
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }

  front() {
    if (this.empty()) return "-1";
    return this.head.data;
  }

  back() {
    if (this.empty()) return "-1";
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  empty() {
    return this.size === 0;
  }
}

const queue = new Queue();
const result = [];

for (let i = 1; i < n + 1; i++) {
  const [op, num] = input[i].split(" ");
  if (op === "push") {
    queue.push(Number(num));
  } else if (op === "pop") {
    result.push(queue.pop());
  } else if (op === "size") {
    result.push(queue.size);
  } else if (op === "empty") {
    result.push(queue.empty() ? "1" : "0");
  } else if (op === "front") {
    result.push(queue.front());
  } else if (op === "back") {
    result.push(queue.back());
  }
}

console.log(result.join("\n"));
