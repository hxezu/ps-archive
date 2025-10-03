function solution(n) {
    const isPrime = Array(n+1).fill(true)
    isPrime[0] = isPrime[1] = false
    
    for(let i=2; i*i <=n ; i++){
        if(isPrime[i]){
            for(let j=i*i; j<=n; j+=i){
                isPrime[j] = false
            }
        }
    }
    
    let cnt = 0;
    for(let i=2; i<=n ; i++){
        if(isPrime[i]) cnt++
    }
    return cnt;
}