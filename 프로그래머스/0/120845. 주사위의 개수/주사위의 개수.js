function solution(box, n) {
    return box.reduce((a,b)=> a * Math.floor(b / n), 1);
}