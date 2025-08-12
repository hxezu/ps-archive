function solution(players, callings) {
    const pos = new Map(players.map((name,i)=> [name,i]))
    
    for(const name of callings){
        const idx = pos.get(name)
        if(idx > 0){
            const prevName = players[idx-1]
            
            const temp = players[idx-1]
            players[idx-1] = players[idx]
            players[idx] = temp
            
            pos.set(name, idx-1)
            pos.set(prevName,idx)
        }

    }
    return players;
}