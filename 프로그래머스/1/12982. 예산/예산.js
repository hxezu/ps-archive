function solution(d, budget) {
    let sum = d.sort((a,b)=>a-b).reduce((acc,v)=>acc+v, 0)
    
    while(sum > budget && d.length>0){
        sum -= d.pop()
    }
    return d.length;
}