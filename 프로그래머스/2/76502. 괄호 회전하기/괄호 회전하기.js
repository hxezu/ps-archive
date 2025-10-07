function isValid(strArr){
    const stack = []

    for(let i=0; i<strArr.length; i++){
        const ch = strArr[i]
        if(ch==="(" || ch==="{"||ch==="["){
            stack.push(ch)
        }else{
            const top = stack.pop()
            if(
                (ch===")" && top!=="(")||
                (ch==="}" && top!=="{")||
                (ch==="]" && top!=="[")
            ){
                return false
            }
        }
    }

    return stack.length===0
}

function solution(s) {
    const arr = s.split("")
    const n = s.length
    let answer = 0;

    for(let i=0;i<n; i++){
        if(isValid(arr)) answer++
        arr.push(arr.shift())
    }

    return answer;
}
