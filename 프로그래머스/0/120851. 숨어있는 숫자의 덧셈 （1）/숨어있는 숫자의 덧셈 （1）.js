function solution(my_string) {
    return my_string.replace(/\D/g, "").split("").map(Number).reduce((a,b)=>a+b,0);
}