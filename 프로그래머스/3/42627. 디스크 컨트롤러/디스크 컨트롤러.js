class MinHeap{
    constructor(){
        this.heap = []
    }
    
    peek(){
        return this.heap[0]
    }
    
    push(value){
        this.heap.push(value)
        this.bubbleUp()
    }
    
    size(){
        return this.heap.length
    }
    
    pop(){
        if(this.heap.length === 1) return this.heap.pop()
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return min
    }
    
    bubbleUp(){
        let index = this.heap.length -1;
        while(index > 0){
            let parent = Math.floor((index-1)/2)
            
            if(this.compare(this.heap[parent], this.heap[index])) break
                
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }
    
    bubbleDown(){
        let index =0;
        const length = this.heap.length
        
        while(true){
            let left = index * 2 +1
            let right = index * 2 +2
            let smallest = index
            
            if(left<length && this.compare(this.heap[left], this.heap[smallest]))
                smallest = left
            if(right<length && this.compare(this.heap[right], this.heap[smallest]))
                smallest = right
            if(smallest === index) break
            
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            index = smallest
        }
    }
    
    compare(a,b){
        if(a.remain !== b.remain) return a.remain < b.remain
        if(a.arrival !== b.arrival) return a.arrival < b.arrival
        return a.index < b.index
    }
    
}

function solution(jobs) {
    const minHeap = new MinHeap()
    jobs.sort((a,b) => a[0]-b[0])
    
    let curTime = 0
    let totalWait =0
    let i =0
    
    while(i<jobs.length || minHeap.size()>0 ){
        while(i<jobs.length && jobs[i][0] <=curTime){
            const [arrival, remain] = jobs[i]
             minHeap.push({remain,arrival,index:i})
            i++
        }
        
        if(minHeap.size()>0){
            let job = minHeap.pop()
            curTime += job.remain
            totalWait += curTime - job.arrival
        }else{
            curTime = jobs[i][0]
        }
        
    }
    
    return Math.floor(totalWait/jobs.length);
}