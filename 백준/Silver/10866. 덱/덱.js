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

class Deque {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push_front(data) {
    const newNode = new Node(data);
    if (!this.size) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  push_back(data) {
    const newNode = new Node(data);
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

  pop_front() {
    if (!this.size) return -1;
    const popData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return popData;
  }

  pop_back() {
    if (!this.size) return -1;

    if (this.size === 1) {
      const data = this.head.data;
      this.head = null;
      this.size--;
      return data;
    }

    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.size--;
    return current.data;
  }

  print_front() {
    if (!this.size) return -1;
    return this.head.data;
  }

  print_back() {
    if (!this.size) return -1;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const deque = new Deque();
const result = [];
const lines = input.slice(1);

for (const line of lines) {
  const [op, num] = line.split(" ");
  if (op === "push_front") {
    deque.push_front(num);
  } else if (op === "push_back") {
    deque.push_back(num);
  } else if (op === "pop_front") {
    result.push(deque.pop_front());
  } else if (op === "pop_back") {
    result.push(deque.pop_back());
  } else if (op === "size") {
    result.push(deque.size);
  } else if (op === "empty") {
    result.push(deque.isEmpty() ? 1 : 0);
  } else if (op === "front") {
    result.push(deque.print_front());
  } else if (op === "back") {
    result.push(deque.print_back());
  }
}

console.log(result.join("\n"));
