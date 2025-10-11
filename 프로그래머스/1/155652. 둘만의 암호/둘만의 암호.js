function solution(s, skip, index) {
    const skips = new Set(skip)
    let result = ''
    
    for(let ch of s){
        let cnt = 0
        let code = ch.charCodeAt(0)
        
        while(cnt < index){
            code++
            if(code > 122) code = 97
            const nextChar = String.fromCharCode(code)
            if(!skips.has(nextChar)) cnt++
        }
        result+= String.fromCharCode(code)
    }
    return result;
}