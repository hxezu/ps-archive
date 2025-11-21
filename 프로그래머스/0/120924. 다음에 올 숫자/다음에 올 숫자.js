function solution(common) {
    const a = common[1] - common[0];
    const b = common[1] / common[0];

    if (common[2] - common[1] === a) {
        return common[common.length - 1] + a;
    } else {
        return common[common.length - 1] * b;
    }
}
