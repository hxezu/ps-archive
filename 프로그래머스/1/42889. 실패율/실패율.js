function solution(N, stages) {
    const result = []
    const stageCount = Array(N+2).fill(0)
    
    for(const s of stages){
        stageCount[s]++
    }
    
    let totalPlayers = stages.length
    
    for(let i=1; i<=N;i++){
        const fail = stageCount[i]
        const failRate = totalPlayers === 0? 0: fail/totalPlayers
        
        result.push({stage: i, failRate})
        
        totalPlayers -= fail
    }
    
    result.sort((a,b)=>{
        if(b.failRate === a.failRate) return a.stage - b.stage
        return b.failRate - a.failRate
    })
    
    return result.map(r=>r.stage);
}