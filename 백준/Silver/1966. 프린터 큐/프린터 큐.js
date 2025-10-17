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

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
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

      // 부모가 자식보다 작으면 스왑
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

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

const T = Number(input[0]);
let idx = 1;
let result = [];

for (let t = 0; t < T; t++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  const priorities = input[idx++].split(" ").map(Number);

  const queue = priorities.map((p, i) => [i, p]);
  const heap = new MaxHeap();

  priorities.forEach((p) => heap.push(p));

  let printed = 0;

  while (queue.length) {
    const [index, priority] = queue.shift();

    if (priority === heap.peek()) {
      heap.pop();
      printed++;
      if (index === M) {
        result.push(printed);
        break;
      }
    } else {
      queue.push([index, priority]);
    }
  }
}

console.log(result.join("\n"));
