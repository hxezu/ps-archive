function solution(n) {
    const result = [];

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
            while (n % i === 0) {
                n /= i;
            }
        }
    }

    if (n > 1) result.push(n); 

    return result;
}
