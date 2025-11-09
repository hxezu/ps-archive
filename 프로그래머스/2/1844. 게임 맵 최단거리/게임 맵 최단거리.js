function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    
    function bfs(curX, curY, distance){
        const queue = [[curX, curY, distance]]
        visited[curX][curY] = true
        
        while(queue.length){
            const [x,y,dist]=queue.shift()
            if(x===n-1 && y===m-1) return dist
            
            for(let i=0; i<4; i++){
                const nx = x+dx[i]
                const ny = y+dy[i]
                if(nx >=0 && ny>=0 && nx<n&& ny<m&& !visited[nx][ny] && maps[nx][ny]){
                    visited[nx][ny] = true
                    queue.push([nx, ny, dist+1])
                }
            }
            
        }
        
        return -1
    }
    
    return bfs(0,0,1);
}