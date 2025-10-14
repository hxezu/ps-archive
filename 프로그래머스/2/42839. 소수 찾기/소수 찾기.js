function solution(numbers) {
    const nums = numbers.split("")
    const set = new Set()
    
    function isPrime(num){
        if (num < 2) return false;
        for(var i=2;i<=Math.sqrt(num);i++){
            if(num%i == 0) return false;
        }
        return true;    
    }
    
    function dfs(path, used){
        if(path.length > 0){
            const num = Number(path.join(""))
            set.add(num)
        }
        
        for(let i=0; i<numbers.length; i++){
            if(!used[i]){
                used[i] = true
                dfs([...path,nums[i]], used)
                used[i] = false
            }
        }
    }
    
    dfs([], Array(nums.length).fill(false))
    
    let count = 0
    
    for(const num of set){
        if(isPrime(num)) count ++
    }
    
    return count;
}