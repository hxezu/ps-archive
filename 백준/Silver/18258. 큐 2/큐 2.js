//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.size) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.size) return -1;
    const popData = this.head.data;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return popData;
  }

  print_front() {
    return this.size ? this.head.data : -1;
  }

  print_back() {
    return this.size ? this.tail.data : -1;
  }
}

const queue = new Queue();
const result = [];
const lines = input.slice(1);

for (const line of lines) {
  const [op, num] = line.split(" ");
  if (op === "push") {
    queue.push(Number(num));
  } else if (op === "pop") {
    result.push(queue.pop());
  } else if (op === "size") {
    result.push(queue.size);
  } else if (op === "empty") {
    result.push(queue.size ? 0 : 1);
  } else if (op === "front") {
    result.push(queue.print_front());
  } else if (op === "back") {
    result.push(queue.print_back());
  }
}

console.log(result.join("\n"));
