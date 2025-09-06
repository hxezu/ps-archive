function solution(s) {
    let answer = Array(2).fill(0)
    let str = s
    
    while(str!=="1"){
        let len = str.length
        let ones = str = str.replace(/0/g, "").length
        answer[0] ++
        answer[1]+= (len - str)
        str = ones.toString(2)
    }
    
    
    return answer;
}