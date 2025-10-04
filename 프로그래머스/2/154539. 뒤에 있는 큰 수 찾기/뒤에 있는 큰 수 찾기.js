function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1)
    const stack = []
    
    for(let i = numbers.length-1; i>=0 ; i--){
        while(stack.length && numbers[stack[stack.length-1]]<=numbers[i]){
            stack.pop()
        }
        if(stack.length){
            answer[i] = numbers[stack[stack.length-1]]
        }
            
        stack.push(i)
    }
    
    return answer;
}