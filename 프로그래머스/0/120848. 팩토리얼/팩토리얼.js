function solution(n) {
    let i = 1;
    let factorial = 1;

    while (factorial * (i + 1) <= n) {
        i++;
        factorial *= i;
    }

    return i;
}