
function solution(priorities, location) {
    let queue = priorities.map((prior, idx)=>[prior, idx])
    let result = 0
    
    while(queue.length){
        let [prior, idx] = queue.shift()
        
        if(queue.some(([p])=> p>prior)){
            queue.push([prior,idx])
        }else{
            result++
            if(idx===location) return result
        }
    }
    
    return result;
}