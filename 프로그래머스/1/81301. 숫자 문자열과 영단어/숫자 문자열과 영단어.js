function solution(s) {
    let answer = [];
    let numMap = {
        "zero":0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    
    while(s.length >0){
        if(s[0]>="a" && s[0]<="z"){
            for(let word in numMap){
                if(s.startsWith(word)){
                    answer.push(numMap[word])
                    s=s.slice(word.length)
                    break;
                }
            }
        }else{
            answer.push(s[0])
            s = s.slice(1)
        }
    }
    return Number(answer.join(""));
}