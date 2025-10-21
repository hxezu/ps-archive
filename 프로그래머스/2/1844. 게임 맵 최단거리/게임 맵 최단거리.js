function solution(maps) {
    const m = maps.length
    const n = maps[0].length
    
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    
    function bfs(sx,sy,distance){
        const queue = [[sx,sy,distance]]
        maps[sx][sy] = 0
        
        while(queue.length>0){
            const [x,y, dist] = queue.shift()
            
            if(x===m-1 && y===n-1) return dist
            
            for(let i=0; i<4; i++){
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(nx>=0 && nx<m && ny>=0 && ny<n &&maps[nx][ny]===1){
                    maps[nx][ny] = 0
                    queue.push([nx,ny, dist+1])
                }
            }
        }
        return -1
        
    }
    return bfs(0,0,1);
}