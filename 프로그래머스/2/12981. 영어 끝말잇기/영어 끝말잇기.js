function solution(n, words) {
    let stack = [words[0]]    

    for(let i=1; i<words.length; i++){
        const prev = stack[stack.length-1]
        const cur = words[i]
        
        if(stack.includes(cur)){
            return [(i%n)+1, Math.floor(i/n)+1]
        }
        
        if(prev[prev.length-1]!==cur[0]){
            return [(i%n)+1, Math.floor(i/n)+1]
        }
        stack.push(cur)
    }
    return [0,0];
}