function solution(n) {
    return new Array(n).fill(0).map((_, idx) => idx%2?"박":"수").join("");
}