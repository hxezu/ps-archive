const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function tiling(n){
    const dp = Array(n+1).fill(0)
    dp[1] = 2
    dp[2] = 7

    for(let i=3; i<=n; i++){
        dp[i] = (dp[i-1] * dp[i-2] + 2**i)% 1000000007
    }
    return dp[n]
}

console.log(tiling(n))