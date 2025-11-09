function solution(n, computers) {
    const graph = Array.from({length:n}, ()=>[])
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i!==j && computers[i][j]){
                graph[i].push(j)
            }
        }
    }
    
    const visited = Array(n).fill(false)
    
    function dfs(node){
        for(const next of graph[node]){
            if(!visited[next]){
                visited[next] = true
                dfs(next)
            }
        }
    }
    
    let count = 0
    for(let i=0;i<n; i++){
        if(!visited[i]){
            visited[i] = true
            dfs(i)
            count++
        }
    }
    return count
}