function solution(sides) {
    const [a, b] = sides;
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    const case1 = max - (max - min + 1) + 1; 
    const case2 = (a + b - 1) - max;

    return case1 + case2;
}
