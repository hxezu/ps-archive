function solution(clothes) {
    let typeCount = {}
    
    for(const [name, type] of clothes){
        if(typeCount[type]){
            typeCount[type]++
        }else{
            typeCount[type] =1
        }
    }
    
    let combinations =1
    for(const type in typeCount){
        combinations *= typeCount[type]+1
    }
    return combinations-1;
}