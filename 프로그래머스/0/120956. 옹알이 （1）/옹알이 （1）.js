function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let b of babbling) {
        let temp = b;
        for (let w of words) {
            temp = temp.replace(w, " ");
        }
        if (temp.trim() === "") count++;
    }

    return count;
}
