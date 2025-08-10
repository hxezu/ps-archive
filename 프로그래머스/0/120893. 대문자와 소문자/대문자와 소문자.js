function solution(my_string) {
    var answer = '';
    let splitted = my_string.split("")
    
    for(let i=0; i<splitted.length; i++){
        if(splitted[i]=== splitted[i].toUpperCase()){
            answer += splitted[i].toLowerCase()
        }else{
            answer += splitted[i].toUpperCase()
        }
    }
    return answer;
}