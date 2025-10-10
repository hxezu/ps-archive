function divisor(n){
    let cnt = 0
    for(let i=1; i<Math.sqrt(n); i++){
        if(n%i ===0) cnt+=2
    }
    return Number.isInteger(Math.sqrt(n))?cnt+1: cnt;
}

function solution(number, limit, power) {
    const arr = []
    
    for(let i=1; i<number+1; i++){
        const count = divisor(i)
        arr.push(count>limit? power: count)
    }
    
    return arr.reduce((a,b)=>a+b,0);
}