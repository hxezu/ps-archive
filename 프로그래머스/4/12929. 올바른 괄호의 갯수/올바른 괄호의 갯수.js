function solution(n) {
    let count = 0
    
    function dfs(open, close){
        if(open === n && close===n) {
            count++;
            return;
        }
        
        if(open<n) dfs(open+1, close)
        if(close<open) dfs(open, close+1)
    }
    
    dfs(0,0)
    
    return count;
}