function solution(k, tangerine) {
    let sizeMap = new Map();
    tangerine.forEach(tan=>{
        if(sizeMap.has(tan)){
            sizeMap.set(tan, sizeMap.get(tan)+1)
        }else{
            sizeMap.set(tan,1)
        }
    })
    
    let counts = Array.from(sizeMap.values()).sort((a,b)=>b-a)
    
    let i = 0
    let sum = 0
    
    while(sum<k){
        sum += counts[i]
        i++
    }
    return i;
}