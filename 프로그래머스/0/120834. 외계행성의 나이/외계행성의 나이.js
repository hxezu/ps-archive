function solution(age) {
    return String(age)
        .split("")               
        .map(Number)              
        .map(a => String.fromCharCode(97 + a))
        .join(""); 
}