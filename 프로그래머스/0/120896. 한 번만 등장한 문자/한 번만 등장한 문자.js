function solution(s) {
    const count = {}
    for(const ch of s) count[ch] = (count[ch]||0) +1
    return [...s].filter(ch=>count[ch]===1).sort().join("")
}