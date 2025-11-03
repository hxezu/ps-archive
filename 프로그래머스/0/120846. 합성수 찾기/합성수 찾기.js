function solution(n) {
    var answer = 0;
    function countDivisors(num){
        let ans = 0
        for(let i=1; i<Math.sqrt(num); i++){
            if(num%i===0) ans+=2
        }
        return Number.isInteger(Math.sqrt(num))?ans+1: ans
    }
    
    for(let i=n; i>3; i--){
        if(countDivisors(i)>=3) answer++
    }
    return answer;
}