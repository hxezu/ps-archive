function solution(a, b) {
    return a.reduce((acc,val,index)=> acc+(val*b[index]), 0);
}