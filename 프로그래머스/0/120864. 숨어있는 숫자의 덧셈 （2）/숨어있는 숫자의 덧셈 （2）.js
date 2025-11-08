function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    return numbers ? numbers.map(Number).reduce((acc, sum) => acc + sum, 0) : 0;
}
