function solution(s) {
    let alphabetArr = new Array(26).fill(-1);
    let answer = []
    for(let i=0; i<s.length; i++){
         let index = s.charCodeAt(i) - "a".charCodeAt()
         if(alphabetArr[index]===-1){
            answer.push(-1)  
        }else{
            answer.push(i - alphabetArr[index])
        }
        alphabetArr[index] = i
    }
    return answer;
}