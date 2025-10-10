function solution(n, computers) {
    const visited = Array(n).fill(false)
    const graph = Array.from({length:n}, ()=>[])
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i!==j && computers[i][j]){
                graph[i].push(j)
            }
        }
    }
    
    function dfs(node){
        visited[node] = true
        for(const next of graph[node]){
            if(!visited[next]) dfs(next)
        }
    }
    
    let answer = 0
    
    for(let i=0; i<n; i++){
        if(!visited[i]) {
            dfs(i)
            answer++
        }
    }
    return answer;
}