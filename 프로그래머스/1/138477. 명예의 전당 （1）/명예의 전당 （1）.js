class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모, 왼쪽, 오른쪽 인덱스 계산
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return i * 2 + 1; }
  getRightChildIndex(i) { return i * 2 + 2; }

  // 두 원소 교환
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 값 추가
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 위로 올리기 (heapify up)
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // 최소값 제거
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  // 아래로 내리기 (heapify down)
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = this.getLeftChildIndex(index);
      let right = this.getRightChildIndex(index);
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  // 최솟값 확인 (삭제 X)
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}


function solution(k, score) {
    const heap = new MinHeap();
    const answer = []
    
    for(let i=0; i<score.length; i++){
        if(heap.size() < k){
            heap.push(score[i])
            answer.push(heap.peek())
        }else{
            if(score[i] > heap.peek()){
                heap.pop()
                heap.push(score[i])
                answer.push(heap.peek())
            }else{
                answer.push(heap.peek())
            }
        }
        
    }
    return answer;
}