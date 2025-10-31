function solution(num, k) {
    const idx = String(num).indexOf(k)
    return idx===-1?-1 : idx+1;
}