function solution(wants, number, discount) {
    const obj = Object.fromEntries(wants.map((want,i)=> [want, number[i]]))
    let answer = 0;
    
    for(let i=0; i <= discount.length-10 ; i++){
        const temp = {...obj}
        const arr = discount.slice(i,i+10)
        let isValid = true
        
        for(let item of arr){
            if(temp[item]){
                temp[item]--;
            }else{
                isValid = false
                break;
            }
        }
        if(isValid && Object.values(temp).every(v=>v===0))
        answer++
    }
    
    return answer;
}