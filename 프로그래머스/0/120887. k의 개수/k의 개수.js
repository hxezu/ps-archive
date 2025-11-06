function solution(i, j, k) {
    let ans = '';
    for (let start = i; start <= j; start++) {
        ans += start;
    }
    return ans.split(k).length - 1;
}
