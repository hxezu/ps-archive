function solution(n, costs) {
    const graph = Array.from({length:n},()=>[])
    let total = 0;
    
    for(const [u,v,w] of costs){
        graph[u].push([v,w])
        graph[v].push([u,w])
    }
    
    const INF = 1e9
    const visited = Array(n).fill(false)
    const minDist = Array(n).fill(INF)
    
    minDist[0] = 0
    
    for(let i=0; i<n; i++){
        let u = -1
        let best = INF;
        for(let j=0; j<n; j++){
            if(!visited[j] && minDist[j]<best){
                best = minDist[j]
                u = j
            }
        }
        
        visited[u] = true
        total += best
        
        for(const [v,w] of graph[u]){
            if(!visited[v] && w<minDist[v]){
                minDist[v] = w
            }
        }
    }
    
    
    
    return total;
}