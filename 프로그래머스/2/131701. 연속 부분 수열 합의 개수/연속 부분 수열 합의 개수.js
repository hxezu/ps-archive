function solution(elements) {
    let numSet = new Set();
    const elSize = elements.length;
    
    for(let i=1; i<=elSize; i++){
        for(let j=0; j<elSize; j++){  
            let sum = 0 
            for(let k=j; k<i+j; k++){
                sum += elements[k%elSize]
            }
            numSet.add(sum)
        }
        
    }
    
    return numSet.size;
}