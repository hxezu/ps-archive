function solution(tickets) {
    const visitedTicket = Array(tickets.length).fill(false)
    let answer = []
    let found = false
    
    tickets.sort()
    
    function dfs(route){
        if(found) return
        if(route.length === tickets.length+1){
            answer = route
            found = true
            return;
        }
        
        for(let i=0; i< tickets.length; i++){
            if(!visitedTicket[i] && route[route.length-1]===tickets[i][0]){
                visitedTicket[i] = true
                dfs([...route, tickets[i][1]])
                visitedTicket[i] = false
            }
        }
        
    }
    
    dfs(["ICN"])
    return answer;
}