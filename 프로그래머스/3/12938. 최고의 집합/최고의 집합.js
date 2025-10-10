function solution(n, s) {
    if(n > s) return [-1]
    
    const answer = Array(n).fill(Math.floor(s/n))
    const mod = s % n
    
    for(let i=n-mod; i<n; i++){
            answer[i]+=1
    }

    return answer;
}