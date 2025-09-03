function solution(string){
    let stack = []
    
    for(const ch of string){
        if(ch==="("){
            stack.push(ch)
        }else{
            if(stack.length){
                stack.pop()
            }else{
                return false
            }
        }
    }

    return stack.length===0;
}