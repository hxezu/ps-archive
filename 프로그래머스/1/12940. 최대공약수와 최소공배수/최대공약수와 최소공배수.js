function solution(n, m) {
    var answer = [];
    const gcd = (a,b)=> b===0? a:gcd(b, a%b)
    const lcm = (a,b) => (a*b) /gcd(a,b)
    answer.push(gcd(n,m))
    answer.push(lcm(n,m))
    return answer;
}