function solution(numbers) {
    const map = {
        "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
    };

    let tmp = "";
    let answer = "";

    for (let ch of numbers) {
        tmp += ch;
        if (map[tmp] !== undefined) {
            answer += map[tmp];
            tmp = "";
        }
    }

    return Number(answer);
}
