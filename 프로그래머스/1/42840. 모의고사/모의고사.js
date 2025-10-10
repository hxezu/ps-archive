function solution(answers) {
    const math1 = [1,2,3,4,5]
    const math2 = [2,1,2,3,2,4,2,5]
    const math3 = [3,3,1,1,2,2,4,4,5,5]
    const students = {1:0, 2:0, 3:0}
    
    for(let i=0; i<answers.length; i++){
        if(math1[i%math1.length]===answers[i]) students[1]++
        if(math2[i%math2.length]===answers[i]) students[2]++
        if(math3[i%math3.length]===answers[i]) students[3]++
    }
    
    const maxScore = Math.max(students[1], students[2], students[3])
    const result = []
    
    for(let key in students){
        if(students[key] === maxScore) result.push(Number(key))
    }
    
    return result;
}