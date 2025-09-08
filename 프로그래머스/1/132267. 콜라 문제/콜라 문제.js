function solution(a, b, n) {
    let empty = n;
    let full = []
    let i = 0
    
    while(empty>=a){
        full.push(Math.floor(empty/a) * b)
        empty = full[i] + (empty%a)
        i++
    }
    return full.reduce((acc,cur)=>acc+cur, 0);
}