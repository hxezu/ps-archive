function solution(skill, skill_trees) {
    let answer = 0
    
    for(const tree of skill_trees){
        let filtered = ""
        for(const ch of tree){
            if(skill.includes(ch)) filtered +=ch
        }
        if(skill.indexOf(filtered)===0) answer++
    }
    return answer;
}