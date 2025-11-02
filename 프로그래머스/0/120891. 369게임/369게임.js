function solution(order) {
    let cnt = 0
    String(order).split("").map(Number).forEach(o=>{
        if(o!==0 && o%3===0) cnt++
    })
    return cnt;
}