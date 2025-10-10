function solution(dirs) {
    let x = 5, y = 5;
    const set = new Set()
    let answer = 0
    
    const move = { U:[0,1], D:[0,-1], L:[-1,0], R:[1,0]}
    
    for(const dir of dirs){
        const [dx, dy] = move[dir]
        const nx = x + dx;
        const ny = y + dy
        
        if(nx<0 || nx>10 || ny<0 || ny>10) continue
        
        const path = `${x},${y},${nx},${ny}`
        const reversePath = `${nx},${ny},${x},${y}`
        
        if(!set.has(path)){
            set.add(path)
            set.add(reversePath)
            answer++
        }
        
        x = nx
        y = ny
    }
    
    return answer;
}