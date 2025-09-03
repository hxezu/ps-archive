function solution(progresses, speeds) {
    let currentTime = 0;
    let result = []
    let cnt = 0
    
    for(let i=0; i<progresses.length; i++){
        if(Math.ceil((100-progresses[i])/speeds[i]) > currentTime){
            if(cnt>0) result.push(cnt)
            currentTime = Math.ceil((100-progresses[i])/speeds[i])
            cnt = 1
        }else{
            cnt++
        }
           
    }
    result.push(cnt)
    return result
}