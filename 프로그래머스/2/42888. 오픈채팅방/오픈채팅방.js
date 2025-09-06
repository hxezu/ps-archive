function solution(record) {
    let answer = [];
    let userMap = new Map()
    
    record.forEach(line=>{
        const [op, id, name] = line.split(" ");
        if(op==="Enter")
            userMap.set(id,name)
        else if(op==="Change")
            userMap.set(id,name)
    })
    
    record.forEach(line=>{
        const [op, id, name] = line.split(" ");
        if(op==="Enter")
            answer.push(userMap.get(id)+"님이 들어왔습니다.")
        else if(op==="Leave")
            answer.push(userMap.get(id)+"님이 나갔습니다.")
    })
    
    return answer;
}