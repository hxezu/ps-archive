function solution(begin, target, words) {
    
    function canConvert(w1, w2){
        let diff = 0
        for(let i=0; i<w1.length; i++){
            if(w1[i]!==w2[i]) diff++
        }
        return diff===1
    }
    
    let min = Infinity;
    const visited = Array(words.length).fill(false)
    
    function dfs(current, depth){
       if(current === target){
           min = Math.min(min, depth)
           return;
       }
        
        for(let i=0; i<words.length;i++){
            if(!visited[i] && canConvert(current,words[i])){
                visited[i] = true
                dfs(words[i], depth+1)
                visited[i] = false
            }
        }
    }
        
    dfs(begin, 0)
    
    return min===Infinity? 0 : min;
}