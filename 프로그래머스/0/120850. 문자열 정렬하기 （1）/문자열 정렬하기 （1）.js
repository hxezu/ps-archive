function solution(my_string) {
    return my_string.replace(/\D/g, "").split("").map(Number).sort((a,b)=>a-b);
}