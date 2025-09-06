function solution(s) {
    let arr = s.toLowerCase().split(" ")
    let answer = []
    for(let str of arr){
        answer.push(str.charAt(0).toUpperCase()+ str.slice(1))
    }
    return answer.join(" ");
}