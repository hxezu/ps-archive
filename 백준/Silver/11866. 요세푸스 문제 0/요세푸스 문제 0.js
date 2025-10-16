//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.size) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  delete() {
    const removedNode = this.head.data;
    this.head = this.head.next;
    if (!this.size) {
      this.tail = null;
    }

    this.size--;

    return removedNode;
  }
}

const linkedList = new LinkedList();

for (let i = 0; i < N; i++) {
  linkedList.append(i + 1);
}

let answer = [];

while (linkedList.size) {
  for (let i = 1; i < K; i++) {
    linkedList.append(linkedList.delete());
  }
  answer.push(linkedList.delete());
}

console.log("<" + answer.join(", ") + ">");
