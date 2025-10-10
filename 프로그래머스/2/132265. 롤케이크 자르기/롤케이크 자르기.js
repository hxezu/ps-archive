function solution(topping) {
    const left = new Set()
    const rightCount = {}
    let rightKinds = 0
    let answer = 0
    
    for(const top of topping){
        if(!rightCount[top]) rightKinds++
        rightCount[top] = (rightCount[top]||0) + 1
    }
    
    for(const top of topping){
        left.add(top)
        rightCount[top]--
        
        if(rightCount[top]===0){ 
            rightKinds--
            delete rightCount[top]
}
        
        if(left.size === rightKinds){
            answer++
        }
        
    }
    
    return answer;
}