function solution(emergency) {
    const emg = [...emergency]
    emg.sort((a,b)=>b-a)
    const result = []
    for(const e of emergency){
        result.push(emg.indexOf(e)+1)
    }
    return result;
}