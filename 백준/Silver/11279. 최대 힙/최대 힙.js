//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) largest = left;
      if (right < length && this.heap[right] > this.heap[largest])
        largest = right;

      if (largest === index) break;

      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      index = largest;
    }
  }
}

const n = input[0];
const sequence = input.slice(1).map(Number);
const maxHeap = new MaxHeap();
const result = [];

for (const s of sequence) {
  if (s === 0) {
    result.push(maxHeap.pop());
  } else {
    maxHeap.push(s);
  }
}

console.log(result.join("\n"));
