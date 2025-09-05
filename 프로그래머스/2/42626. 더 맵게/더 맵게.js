class MinHeap{
    constructor(){
        this.heap=[]
    }
    
    size(){
        return this.heap.length
    }
    
    peek(){
        return this.heap[0]
    }
    
    push(value){
        this.heap.push(value)
        this.bubbleUp()
    }
    
    pop(){
        if(this.heap.length ===1) return this.heap.pop()
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return min;
    }
    
    bubbleUp(){
        let index = this.heap.length -1
        while(index>0){
            let parent = Math.floor((index-1)/2)
            
            if(this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            
            index = parent
        }
    }
    
    bubbleDown(){
        let index = 0;
        const length = this.heap.length;
        
        while(true){
            let left = index *2+1
            let right = index*2+2
            let smallest = index
            
            if(left<length && this.heap[left]< this.heap[smallest]) smallest = left
            if(right<length && this.heap[right]< this.heap[smallest]) smallest = right
            
            if(smallest === index) break
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            index = smallest
        }
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap()
    scoville.forEach(s => minHeap.push(s))
    let count = 0
    
    while(minHeap.peek() < K){
        if(minHeap.size() >=2){
            let last = minHeap.pop()
            let before = minHeap.pop()
            minHeap.push(last + (before *2))
            count ++
        }else{
            return -1
        }
    }
    
    return count;
}