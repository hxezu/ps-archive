function solution(participant, completion) {
    const player = {}
    
    for(let part of participant){
        if(player[part]){
            player[part]++
        }else{
            player[part]=1
        }
    }
    
    for(let comp of completion){
        player[comp] --
    }
    
    for(let key in player){
       if(player[key]>0){ return key}
    }
    
    return null;
}