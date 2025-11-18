function solution(s) {
    const arr = s.split(" ");
    let sum = 0;
    let last = 0;

    for (let v of arr) {
        if (v === "Z") {
            sum -= last;
        } else {
            let num = Number(v);
            sum += num;
            last = num;
        }
    }

    return sum;
}
