const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function climbStairs(n){
    const dp = Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 0
    if(n>=2) dp[2] =1
    if(n>=3) dp[3] =1

    for(let i=4; i<=n; i++){
        dp[i] = dp[i-2]+dp[i-3]
    }

    return dp[n]
}

console.log(climbStairs(n)%10007)