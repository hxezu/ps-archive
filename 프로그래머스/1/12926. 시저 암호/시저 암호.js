function solution(s, n) {
    let answer = []
    for(const ch of s){
        if(ch>="a" && ch<="z"){
            answer.push(String.fromCharCode( "a".charCodeAt() + ((ch.charCodeAt() - "a".charCodeAt() +n) % 26)))
        }else if(ch>="A" && ch<="Z"){
            answer.push(String.fromCharCode( "A".charCodeAt() + ((ch.charCodeAt() - "A".charCodeAt() +n) % 26)))
        }else{
            answer.push(ch)
        }
    }
    return answer.join("");
}