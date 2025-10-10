function solution(s) {
    const jsonArr = JSON.parse(s.replace(/{/g,"[").replace(/}/g, "]"));
    const arr = jsonArr.sort((a,b)=>a.length-b.length)
    
    const result = []
    for(const sub of arr){
        for(const num of sub){
            if(!result.includes(num)) result.push(num)
        }
    }
    return result;
}