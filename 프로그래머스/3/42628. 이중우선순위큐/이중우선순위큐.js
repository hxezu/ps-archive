class MaxHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0] ?? null;
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  pop() {
    if (this.heap.length === 0) return null;
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
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
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
      if (right < length && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === index) break;
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
      index = largest;
    }
  }
}

function solution(operations) {
  const maxHeap = new MaxHeap();
  const minHeap = new MaxHeap();
  const count = new Map(); // 현재 큐에 있는 값들의 개수
  
  const clean = (heap, isMin = false) => {
    while (heap.size() > 0) {
      const val = heap.peek();
      const realVal = isMin ? -val : val;
      if ((count.get(realVal) || 0) === 0) {
        heap.pop();
      } else {
        break;
      }
    }
  };
  
  for (const operation of operations) {
    const [op, numStr] = operation.split(" ");
    const num = Number(numStr);
    
    if (op === "I") {
      maxHeap.push(num);
      minHeap.push(-num);
      count.set(num, (count.get(num) || 0) + 1);
    } else if (op === "D") {
      if (num === 1) {
        // 최댓값 삭제
        clean(maxHeap, false);
        if (maxHeap.size() > 0) {
          const maxVal = maxHeap.pop();
          count.set(maxVal, count.get(maxVal) - 1);
          if (count.get(maxVal) === 0) count.delete(maxVal);
        }
      } else {
        // 최솟값 삭제
        clean(minHeap, true);
        if (minHeap.size() > 0) {
          const minVal = -minHeap.pop();
          count.set(minVal, count.get(minVal) - 1);
          if (count.get(minVal) === 0) count.delete(minVal);
        }
      }
    }
  }
  
  clean(maxHeap, false);
  clean(minHeap, true);
  
  if (maxHeap.size() === 0) return [0, 0];
  
  return [maxHeap.peek(), -minHeap.peek()];
}